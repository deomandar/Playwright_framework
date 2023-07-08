import { test, expect } from '@playwright/test';
import { Employeedetails } from '../../pages/employee'

test('test2', async ({ page }) => {

  const objemp = new Employeedetails(page)

  await objemp.gotoEmployeedetailsPage();
  await objemp.EnterDetails('Mandar Dinkar Deo','mandardeo@yahoo.com','D-103 Suvidha Angan Society Narhe Pune -411041','SAME AS ABOVE');

});