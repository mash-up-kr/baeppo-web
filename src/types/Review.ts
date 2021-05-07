import ReviewItem from "./ReviewItem";

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
  contentDetail: string;
  items: ReviewItem[];
  tags: string[];
}

export default Review;
