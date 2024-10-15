Projects = [
    {
        "Title": "Er jeg død?",
        "Description": "ja",
        "Image": "Images/You Deer.png"
    },
    {
        "Title": "Test",
        "Description": "WOW",
        "Image": "Images/Logo.png"
    }
]

var ProjectIndex = 0;


function SlideLeft() {
    if (ProjectIndex == 0) {
        ProjectIndex = Projects.length - 1
    }

    else {
        ProjectIndex -= 1
    }

    LoadCurrentProject()
}
document.getElementById("SlideLeft").addEventListener("click", SlideLeft)

function SlideRight() {
    if (ProjectIndex >= Projects.length - 1) {
        ProjectIndex = 0
    }

    else {
        ProjectIndex += 1
    }

    LoadCurrentProject()
}
document.getElementById("SlideRight").addEventListener("click", SlideRight)


function LoadProject(Title, Description, Image) {
    const TitleText = document.getElementById("ProjectTitle");
    TitleText.innerHTML = Title;

    const DescriptionText = document.getElementById("ProjectDescription");
    DescriptionText.innerHTML = Description;

    const ProjectImage = document.getElementById("ProjectImage");
    ProjectImage.src = Image;
}


function LoadCurrentProject() {
    const Project = Projects[ProjectIndex];
    LoadProject(Project["Title"], Project["Description"], Project["Image"]);
}

LoadCurrentProject()