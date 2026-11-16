const stories = [
  {
    id: 1, category: "Technology", title: "10 helpful everyday examples of artificial intelligence",
    excerpt: "AI is already woven into the little moments of our day. Here are the quiet ways it makes life a bit easier.",
    author: "Maya Chen", initials: "MC", date: "May 18, 2025", read: "6 min read", likes: 248, trending: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85",
    body: ["Artificial intelligence is often discussed in the abstract: huge models, bold predictions, and the future of work. But some of its most useful applications are much closer to home.", "It helps your phone sort photos, makes maps better at predicting a commute, and can make a long list of unread messages easier to understand. These small assists rarely ask for attention. They simply remove a little friction from the day.", "The best technology, after all, is not always the loudest. Sometimes it is the thing that gives you a few minutes back."]
  },
  {
    id: 2, category: "Design", title: "JavaScript vs. TypeScript: what's the difference?",
    excerpt: "Two tools, one ecosystem. A friendly guide to what separates them—and when each one makes sense.",
    author: "Noah Williams", initials: "NW", date: "May 16, 2025", read: "8 min read", likes: 186, trending: true,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=85",
    body: ["If JavaScript is the language of the web, TypeScript is a helpful conversation with it. TypeScript adds a type system that can catch many mistakes while you write, before they reach a browser.", "That extra structure can be especially valuable as a project grows or as more people contribute. JavaScript, meanwhile, remains wonderfully direct: a great choice for quick experiments and smaller projects.", "There is no universal winner. Start with the problem you are solving, the people building it, and how much structure will help you move confidently."]
  },
  {
    id: 3, category: "Ideas", title: "Cryptography and its types, explained simply",
    excerpt: "A clear introduction to the invisible systems that keep everyday conversations and payments private.",
    author: "Aisha Rahman", initials: "AR", date: "May 14, 2025", read: "7 min read", likes: 153, trending: true,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=85",
    body: ["Cryptography is the practice of protecting information by transforming it into a form that only the right people can read. It has been part of human communication for centuries, though today's tools are far more powerful.", "In symmetric encryption, the same secret key locks and unlocks a message. In public-key encryption, two related keys make it possible to share securely without first exchanging a secret.", "Whenever you see the small lock in your browser, cryptography is doing quiet, essential work in the background."]
  },
  {
    id: 4, category: "Culture", title: "The case for making room to be bored",
    excerpt: "In a world that fills every quiet moment, a little empty space may be where our best ideas begin.",
    author: "Lena Brooks", initials: "LB", date: "May 12, 2025", read: "5 min read", likes: 131, trending: false,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=85",
    body: ["We have become remarkably good at filling the gaps. A queue becomes a scroll; a quiet walk becomes a podcast. And yet, our minds need a little room to wander.", "Boredom can be an invitation to notice what is around us and what is happening within. It is not a productivity hack. It is simply an ordinary, human pause.", "Try leaving one small pocket of the day unscheduled. You might be surprised by what finds its way in."]
  },
  {
    id: 5, category: "Technology", title: "A more human way to think about the future of work",
    excerpt: "Beyond tools and trends, the future of work is really a story about how we want to spend our time.",
    author: "Elliot Park", initials: "EP", date: "May 10, 2025", read: "9 min read", likes: 119, trending: true,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85",
    body: ["Conversations about the future of work often begin with a new tool. But the more interesting question is what that tool lets people do with their time, energy, and attention.", "A healthier workplace is not just more efficient. It gives people room to focus, to learn, to connect, and to do work they can feel proud of.", "Technology can help us get there, but our choices about how we use it matter just as much."]
  },
  {
    id: 6, category: "Design", title: "Why the best interfaces know when to get out of the way",
    excerpt: "The most thoughtful design is not always the one you notice. Often, it is the one that lets you focus.",
    author: "Sam Rivera", initials: "SR", date: "May 08, 2025", read: "4 min read", likes: 98, trending: false,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
    body: ["Good design is often associated with novelty: a surprising animation, an unexpected color, a clever interaction. But clarity can be just as expressive.", "When an interface makes the next step obvious, people can spend less time figuring out the tool and more time doing what they came to do.", "A little restraint is not a lack of personality. It is a generous way of making space for the person on the other side of the screen."]
  },
  {
    id: 7, category: "Ideas", title: "A tiny guide to building habits that actually last",
    excerpt: "Forget the grand reset. Small, repeatable steps can turn a good intention into an ordinary part of life.",
    author: "Tara Patel", initials: "TP", date: "May 06, 2025", read: "6 min read", likes: 91, trending: false,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=85",
    body: ["The habits that stick are rarely dramatic. They are small enough to begin on a busy day and flexible enough to survive a difficult week.", "Try attaching a new practice to something you already do, and make the first version almost laughably easy. A page a day is still a book being read.", "Consistency is not a streak that must never break. It is the gentle art of coming back."]
  },
  {
    id: 8, category: "Culture", title: "The everyday art of paying attention",
    excerpt: "A slower look at familiar places can make even an ordinary afternoon feel like a small discovery.",
    author: "Ravi Menon", initials: "RM", date: "May 03, 2025", read: "5 min read", likes: 82, trending: false,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=85",
    body: ["Attention is one of the ways we show care. It helps us see the details that hurry tends to blur: the shifting light, a familiar voice, a street we have walked a hundred times.", "You do not need a faraway destination to feel a sense of discovery. Sometimes all it takes is taking the long way home and looking up.", "The world is full of small invitations. We just have to be there to notice them."]
  },
  {
    id: 9, category: "Technology", title: "Can a computer help us be more creative?",
    excerpt: "A look at the new creative tools that are changing how people sketch, experiment, and make.",
    author: "Maya Chen", initials: "MC", date: "April 30, 2025", read: "7 min read", likes: 77, trending: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
    body: ["Creative tools have always changed the shape of creative work. A camera did not end painting; a synthesizer did not end music. Each opened a new set of possibilities.", "Today's tools can make it faster to explore variations and bring an early idea into focus. The meaningful choices—the why, the feeling, the point of view—still belong to people.", "Perhaps the most useful question is not whether a machine can be creative, but how it can help us make room for more of our own creativity."]
  }
];

const publishedStories = JSON.parse(localStorage.getItem("fieldnotes-published") || "[]");
if (Array.isArray(publishedStories)) stories.unshift(...publishedStories);

const storyList = document.querySelector("#story-list");
const searchInput = document.querySelector("#search-input");
const topicButtons = [...document.querySelectorAll(".topic-chip")];
const emptyState = document.querySelector("#empty-state");
const loadMoreButton = document.querySelector("#load-more");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalContent = document.querySelector("#modal-content");
const toast = document.querySelector("#toast");
const savedStories = new Set(JSON.parse(localStorage.getItem("fieldnotes-saved") || "[]"));
let selectedTopic = "All";
let visibleCount = 5;
let toastTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderStories() {
  const query = searchInput.value.trim().toLowerCase();
  document.querySelector("#story-count").textContent = stories.length;
  const filteredStories = stories.filter((story) => {
    const matchesTopic = selectedTopic === "All" || story.category === selectedTopic;
    const searchable = `${story.title} ${story.excerpt} ${story.category} ${story.author}`.toLowerCase();
    return matchesTopic && searchable.includes(query);
  });
  const shownStories = filteredStories.slice(0, visibleCount);
  storyList.innerHTML = shownStories.map((story) => `
    <article class="story-card">
      <button class="story-image-button" data-open-story="${story.id}" aria-label="Read ${escapeHtml(story.title)}">
        <img class="story-image" src="${escapeHtml(story.image)}" alt="" loading="lazy" />
      </button>
      <div class="story-content">
        <span class="story-category">${escapeHtml(story.category)}</span>
        <button class="story-title" data-open-story="${story.id}">${escapeHtml(story.title)}</button>
        <p class="story-excerpt">${escapeHtml(story.excerpt)}</p>
        <div class="story-meta">
          <span class="author-avatar">${escapeHtml(story.initials)}</span>
          <span class="author-name">${escapeHtml(story.author)}</span>
          <span class="meta-dot">·</span><span>${escapeHtml(story.date)}</span>
          <button class="save-button ${savedStories.has(story.id) ? "saved" : ""}" data-save-story="${story.id}" aria-label="${savedStories.has(story.id) ? "Remove bookmark" : "Bookmark"} ${escapeHtml(story.title)}" aria-pressed="${savedStories.has(story.id)}">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3.5h10v13l-5-3-5 3z"></path></svg>
          </button>
          <span class="read-time">${escapeHtml(story.read)}</span>
        </div>
      </div>
    </article>
  `).join("");
  emptyState.hidden = filteredStories.length !== 0;
  loadMoreButton.hidden = shownStories.length >= filteredStories.length || filteredStories.length === 0;
}

function renderTrending() {
  document.querySelector("#trending-list").innerHTML = stories.filter((story) => story.trending).slice(0, 4).map((story, index) => `
    <li class="trending-item">
      <span class="trending-number">0${index + 1}</span>
      <button class="trending-story" data-open-story="${story.id}">${escapeHtml(story.title)}
        <span class="trending-author">by ${escapeHtml(story.author)}</span>
      </button>
    </li>
  `).join("");
}

function openModal(content) {
  modalContent.innerHTML = content;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalBackdrop.querySelector(".modal-close").focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
}

function openStory(id) {
  const story = stories.find((item) => item.id === Number(id));
  if (!story) return;
  openModal(`
    <img class="article-modal-image" src="${escapeHtml(story.image)}" alt="" />
    <span class="story-category">${escapeHtml(story.category)}</span>
    <h2 id="modal-title">${escapeHtml(story.title)}</h2>
    <div class="article-byline">${escapeHtml(story.author)} · ${escapeHtml(story.date)} · ${escapeHtml(story.read)}</div>
    <div class="article-body">${story.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
  `);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2500);
}

function openWriteForm() {
  openModal(`
    <div class="write-modal">
      <span class="section-kicker">YOUR NEXT BIG IDEA</span>
      <h2 id="modal-title">Write a story.</h2>
      <p>Share a thought, a lesson, or something interesting you found along the way.</p>
      <form class="write-form" id="write-form">
        <label>Story title<input name="title" maxlength="90" placeholder="Give your story a title" required /></label>
        <label>Topic<select name="category"><option>Technology</option><option>Design</option><option>Culture</option><option>Ideas</option></select></label>
        <label>Your story<textarea name="body" minlength="20" placeholder="Start with the idea you can't stop thinking about..." required></textarea></label>
        <button class="publish-button" type="submit">Publish story <span aria-hidden="true">→</span></button>
      </form>
    </div>
  `);
}

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-story]");
  if (openButton) openStory(openButton.dataset.openStory);

  const saveButton = event.target.closest("[data-save-story]");
  if (saveButton) {
    const id = Number(saveButton.dataset.saveStory);
    if (savedStories.has(id)) {
      savedStories.delete(id);
      showToast("Removed from your reading list");
    } else {
      savedStories.add(id);
      showToast("Saved to your reading list");
    }
    localStorage.setItem("fieldnotes-saved", JSON.stringify([...savedStories]));
    renderStories();
  }

  const topicButton = event.target.closest("[data-topic]");
  if (topicButton) {
    selectedTopic = topicButton.dataset.topic;
    topicButtons.forEach((button) => button.classList.toggle("active", button.dataset.topic === selectedTopic));
    visibleCount = 5;
    renderStories();
    document.querySelector("#stories").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

document.querySelector("#open-write").addEventListener("click", openWriteForm);
document.querySelector(".search-toggle").addEventListener("click", () => {
  searchInput.focus();
  document.querySelector("#stories").scrollIntoView({ behavior: "smooth" });
});
searchInput.addEventListener("input", () => { visibleCount = 5; renderStories(); });
loadMoreButton.addEventListener("click", () => { visibleCount += 4; renderStories(); });
document.querySelector("#modal-close").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
  if (event.key === "/" && modalBackdrop.hidden && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});
modalContent.addEventListener("submit", (event) => {
  if (event.target.id !== "write-form") return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = String(formData.get("title")).trim();
  const body = String(formData.get("body")).trim();
  if (!title || body.length < 20) return;
  const category = String(formData.get("category"));
  const author = "You";
  const newStory = {
    id: Date.now(), category, title, excerpt: body.slice(0, 130) + (body.length > 130 ? "…" : ""),
    author, initials: "YO", date: "Just now", read: `${Math.max(1, Math.ceil(body.split(/\s+/).length / 200))} min read`,
    likes: 0, trending: false, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=85",
    body: body.split(/\n{2,}/).filter(Boolean)
  };
  stories.unshift(newStory);
  publishedStories.unshift(newStory);
  localStorage.setItem("fieldnotes-published", JSON.stringify(publishedStories));
  closeModal();
  selectedTopic = "All";
  topicButtons.forEach((button) => button.classList.toggle("active", button.dataset.topic === "All"));
  searchInput.value = "";
  visibleCount = Math.max(5, visibleCount);
  renderStories();
  showToast("Your story is live. Nice work!");
  document.querySelector("#stories").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.querySelector("#email-input");
  if (!emailInput.validity.valid) {
    emailInput.reportValidity();
    return;
  }
  document.querySelector("#newsletter-note").textContent = "You're on the list. See you Sunday!";
  emailInput.value = "";
});

renderStories();
renderTrending();
