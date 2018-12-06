export class Rating {
    rating: number; //1-5 stars
    description: String;
}

export class BabyRating extends Rating {
    sitterId: String;
}

export class SitterRating extends Rating {
    parentId: String;
}