interface Review {
  id: string;
  buildingName: string;
  userId: string;
  nickName: string;
  rating: number;
  createdDate: string;
  images: string[];
  isBookmark: boolean;
  content: string;
}

export default Review;
