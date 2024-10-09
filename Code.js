Projects = [
    {
        "Title": "Er jeg død?",
        "Description": "ja",
        "Image": "Images/You Deer.png"
    }
]


function LoadProject(Title, Description, Image) {
    const ProjectBox = document.createElement("div")

    ProjectBox.classList.add("ProjectBox")

    const TitleText = document.createElement("h1")

    TitleText.innerHTML = Title
    TitleText.classList.add("ProjectTitle")

    const ContentBox = document.createElement("div")

    ContentBox.classList.add("ProjectContentBox")

    const DescriptionText = document.createElement("p")

    DescriptionText.innerHTML = Description
    DescriptionText.classList.add("ProjectDescription")

    const ProjectImage = document.createElement("img")

    ProjectImage.src = Image
    ProjectImage.classList.add("ProjectImage")

    ProjectBox.appendChild(TitleText)
    ProjectBox.appendChild(ContentBox)
    ContentBox.appendChild(DescriptionText)
    ContentBox.appendChild(ProjectImage)
    document.getElementById("Projects").appendChild(ProjectBox)
}

for (Index = 0; Index < Projects.length; Index++) {
    const Project = Projects[Index]

    LoadProject(Project["Title"], Project["Description"], Project["Image"])
}