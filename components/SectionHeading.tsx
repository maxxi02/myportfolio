
type SectionHeadingTypes =
{
    title: string,
    subtitle: string,
}


function SectionHeading({title, subtitle}: SectionHeadingTypes) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </div>
  )
}

export default SectionHeading