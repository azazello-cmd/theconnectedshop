import { test, expect } from '@playwright/test';
 
let postId: number;
 
test.describe.serial('WordPress Posts CRUD API', () => {
 
  test('CREATE post', async ({ request }) => {
    const title = 'Playwright API Post'
    const response = await request.post('/wp-json/wp/v2/posts', {
      data: {
        title: title,
        content: 'Post created via Playwright API test',
        status: 'publish'
      }
    });
 
    expect(response.status()).toBe(201);
 
    const body = await response.json();
    expect(body.id).toBeDefined();
    expect(body.title.rendered).toContain(title);
    // expect(body.content.raw).toBe(body.content);
    expect(body.content.rendered).toBe(body.content);
    
    
    const stripHtml = (html: string) =>
    html.replace(/<[^>]*>/g, '').trim();
 
    const cleanContent = stripHtml(body.content.rendered);
    expect(cleanContent).toBe(body.content);
 
    postId = body.id;

  });
 
  test('READ post', async ({ request }) => {
    const response = await request.get(
      `/wp-json/wp/v2/posts/${postId}`
    );
 
    expect(response.status()).toBe(200);
 
    const body = await response.json();
    expect(body.id).toBe(postId);
    expect(body.status).toBe('publish');
  });
 
  test('UPDATE post', async ({ request }) => {
    const response = await request.put(
      `/wp-json/wp/v2/posts/${postId}`,
      {
        data: {
          title: 'Updated Playwright Title'
        }
      }
    );
 
    expect(response.status()).toBe(200);
 
    const body = await response.json();
    expect(body.title.rendered).toContain('Updated');
  });
 
  test('DELETE post', async ({ request }) => {
    const response = await request.delete(
      `/wp-json/wp/v2/posts/${postId}`,
      {
        params: {
          force: true
        }
      }
    );
 
    expect(response.status()).toBe(200);
 
    const body = await response.json();
    expect(body.deleted).toBeTruthy();
  });
 
});

//// Д/з: покрити - data/url/boolean/array/ (прописати типи даних для перевірок)