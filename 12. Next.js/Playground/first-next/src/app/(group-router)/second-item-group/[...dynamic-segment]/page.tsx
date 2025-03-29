const DynamicSlug = async ({params}: {
    params: Promise<{ 'dynamic-segment': string[] }>
  }) => { 
    const slug = await params
    console.log(slug)
    return (
        <div>
            <div>Динамический slug</div>
            <div>{slug["dynamic-segment"].toLocaleString()}</div>
        </div>
    )
}

export default DynamicSlug