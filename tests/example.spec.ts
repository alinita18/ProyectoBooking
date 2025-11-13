import { test, expect } from '@playwright/test';
import { Home } from "../pages/Home";
import { beforeEach } from 'node:test';

let home: Home;

test.beforeEach(async({page})=>{
  home = new Home(page);
  await page.goto('https://www.booking.com/');
});

/*test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Booking.com/);
});*/

test('Iniciar registro', async ({ page }) => {
    const home = new Home(page);
    await home.IniciarRegistro();
});

/*test('get started link', async ({ page }) => {
  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/