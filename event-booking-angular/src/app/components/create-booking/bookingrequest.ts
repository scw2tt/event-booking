export class BookingRequest {
    constructor(
        public receiver: string,
        public sender: string,
        public sender_account_type: string,
        public status: string,
        public event_date: Date,
        public expiry_date: Date,
        public details: string
    ) { }
}