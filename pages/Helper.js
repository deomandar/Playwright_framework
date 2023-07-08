
exports.Helper = class Helper {

    constructor(page) {

        this.page = page
       
    }

    async navigatetoPage(link){
        await this.page.goto(link);
    }

    async getRamdomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

   

}