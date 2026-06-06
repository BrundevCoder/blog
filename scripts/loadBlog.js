const blogUrl = window.location.search;
const titleUrl = new URLSearchParams(blogUrl);
let title = titleUrl.get("title")

async function getData() {
  try {

    document.getElementById("blogTitleData").innerText = title.toUpperCase()

    const response = await fetch(`blogMdFiles/${title.replace(" ", "_").toLowerCase()}.md`);

    if (!response.ok) {
      document.getElementById("blogDescpData").innerHTML = "Blog post Does not Exists";
      return;
    }

    const markdown = await response.text();

    const htmlBlogContent = marked.parse(markdown);

    document.getElementById("blogDescpData").innerHTML = htmlBlogContent;
  }
  catch(error) {
    document.getElementById("blogDescpData").innerHTML = "Blog post Does not Exists";
  }
}

getData()