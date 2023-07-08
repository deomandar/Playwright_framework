exports.Employeedetails = class Employeedetails {

    constructor(page) {

        this.page = page
        this.txt_UserName = this.page.locator('id=userName');
        this.txt_email=this.page.locator('id=userEmail');
        this.txt_Currentaddress =this.page.locator('id=currentAddress');
        this.txt_permanentaddress =this.page.locator('id=permanentAddress');
        this.btn_submit =this.page.locator('id=submit');
    }

    async gotoEmployeedetailsPage(){
        await this.page.goto('https://demoqa.com/text-box');
    }

    async EnterDetails(username, email,currentaddress,permenantaddress){
       
        await this.txt_UserName.fill(username);
        await this.txt_email.fill(email);
        await this.txt_Currentaddress.fill(currentaddress);
        await this.txt_permanentaddress.fill(permenantaddress);
        await this.btn_submit.click();
    }

}