export class Venue {
    constructor(
        public name: string,
        public password: string,
        public capacity: number,
        public address_line_1: string,
        public address_line_2: string,
        public city: string,
        public country: string,
        public state: string,
        public zipcode: number,
        public link: string,
        public email: string,
        public about_me: string,
    ) { }
}