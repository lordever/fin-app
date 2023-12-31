export async function GET() {
    const res = await fetch('http://localhost:8080/todos', { next: { revalidate: 3600 }});
    const data = await res.json()

    return Response.json(data)
}