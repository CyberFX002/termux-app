import './globals.css';
import Shell from '../components/Shell';
export const metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://kfcstreams.example.com'),title:{default:'KFC STREAMS — Premium Football Live Streaming',template:'%s | KFC STREAMS'},description:'Fast, secure football live streams, scores, fixtures, highlights and premium match intelligence.',openGraph:{title:'KFC STREAMS',description:'Premium football streaming platform',type:'website'},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
