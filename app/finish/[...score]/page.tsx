import Container from '@/components/Container'
import EmptyState from '@/components/EmptyState'

export default async function Home({ params }: { params: { score: string } }) {
    const text = `本次測驗共得${params.score}分`
    return (
        <Container>
            <EmptyState 
                title={text}
                subtitle='如沒要加什麼，就差不多了，我很讚逼逼'
            />
        </Container>
    )
}
