
type SectionHeadingTypes =
{
    title: string,
    subtitle: string,
}


function SectionHeading({title, subtitle}: SectionHeadingTypes) {
  return (
    <div className="max-w-xl mx-auto mb-16 text-center">
        <h2 className="dark:text-darkModeText text-grey-700 mb-2">{title}</h2>
        <p className="dark:text-darkModeText text-grey-600">{subtitle}</p>
    </div>
  )
}

export default SectionHeading