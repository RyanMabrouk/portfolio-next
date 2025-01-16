// export type feedType = {
//   title: "DEV Community: Rayen Mabrouk";
//   description: "The latest articles on DEV Community by Rayen Mabrouk (@ryanmabrouk).";
//   link: "https://dev.to/ryanmabrouk";
//   image: {
//     url: "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https:%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1309840%2F7e42f5db-fa44-448b-8f75-e6d86fe63f01.jpeg";
//     title: "DEV Community: Rayen Mabrouk";
//     link: "https://dev.to/ryanmabrouk";
//   };
//   "atom:link": {
//     $: {
//       rel: "self";
//       type: "application/rss+xml";
//       href: "https://dev.to/feed/ryanmabrouk";
//     };
//   };
//   language: string;
//   item: [
//     {
//       title: string;
//       "dc:creator": string;
//       pubDate: string;
//       link: string;
//       guid: string;
//       description: string;
//       category: string[];
//     },
//   ];
// };

export type FeedType = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string;
    user_id: number;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
};
