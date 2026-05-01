import { getAllTulisan, getAllVideos } from "@/lib/content";
import BentoGrid from "@/components/bento-grid";

export default async function Home() {
  const tulisan = await getAllTulisan();
  const videos = getAllVideos();

  return <BentoGrid tulisan={tulisan} videos={videos} />;
}
