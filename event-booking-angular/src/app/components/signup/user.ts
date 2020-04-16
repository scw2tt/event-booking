export class User {
    constructor(
        public id: number,
        public about_me: string,
        public email: string,
        public genre: string,
        public link: string,
        public location: string,
        public name: string,
        public password: string,
        public is_performer: string,
        public is_venue: string,
        public cap: number,
    ) { }
}
