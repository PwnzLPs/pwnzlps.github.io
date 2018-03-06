  var blogPosts = [
    {
      "title": "Exploring the JavaScript Device APIs",
      "snippet": "The mobile revolution has completely changed how people access the web. It’s only natural then that the web should evolve to better suit the plethora of devices on which it’s now accessed.",
      "url": "http://blog.teamtreehouse.com/exploring-javascript-device-apis"
    },
    {
      "title": "Gamepad Controls for HTML5 Games",
      "snippet": "HTML5 games still have a lot of promises to fulfil, but the W3C gamepad specification is a great example of something that’s going well.",
      "url": "http://blog.teamtreehouse.com/gamepad-controls-html5-games"
    },
    {
      "title": "‘It Is Never Too Late’: How a Teacher and an Artist Switched to Web Careers in Midstream",
      "snippet": "The “breaking moment” in Jon Liu’s teaching career came at 7 o’clock in the morning.",
      "url": "http://blog.teamtreehouse.com/never-late-teacher-artist-switched-web-careers-midstream"
    }
  ];

  // TODO: Add the rest of the code here...

// Get the link element that references the template.html file
var templatesImport = document.getElementById('templates');

// Retrieves the loaded templates.
var templates = templatesImport.import;
// Get template element
var template = templates.getElementById('blog-post');

// Repeat for each of the posts.
for (i in blogPosts) {
    // Get the current post.
    var post = blogPosts[i];

    // Clone the template content.
var clone = document.importNode(template.content, true);

// Apply the blog post data to the template.
clone.querySelector('.post-title a').innerText = post['title'];
clone.querySelector('.post-title a').href = post['url'];
clone.querySelector('.post-snippet').innerText = post['snippet'];

// Add the blog post to the page.
document.getElementById('blog-posts').appendChild(clone);
}
