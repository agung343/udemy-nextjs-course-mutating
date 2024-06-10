export default function ArchieveLayout({archive, latest}) {
    return (<>
    <h1>News Archieve</h1>
    <section id="archive-filter">{archive}</section>
    <section id="archive-latest">{latest}</section>
    </>)
}