// import data from './config.js';
const data = window.portfolioData;

function renderProfile() {
    const header = document.querySelector('header');
    header.innerHTML = `
        <img src="${data.profile.profilePic}" alt="${data.profile.name}" class="profile-pic">
        <div class="header-info">
            <h1>${data.profile.name}</h1>
            <p>${data.profile.title}</p>
            <a href="mailto:${data.profile.email}">${data.profile.email}</a>
        </div>
    `;
}

function renderAbout() {
    const aboutSection = document.querySelector('#about');
    aboutSection.innerHTML = `
        <div class="about-text">${data.about.text}</div>
    `;
}

function renderTimelineItems(items, containerId) {
    const container = document.querySelector(`#${containerId} .item-list`);
    if (!container) return;

    container.innerHTML = items.map(item => `
        <div class="item">
            <div class="item-date">${item.date}</div>
            <div class="item-content">
                <h3>${item.link ? `<a href="${item.link}">${item.title}</a>` : item.title}</h3>
                ${item.description ? `<p>${item.description}</p>` : ''}
                ${item.images && item.images.length > 0 ? `
                    <div class="image-gallery">
                        ${item.images.map(img => `<img src="${img}" alt="Work sample">`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function renderWriting() {
    const writingSection = document.querySelector('#writing');
    const featured = data.writing.featured;

    writingSection.innerHTML = `
        <h2>Writing</h2>
        <a href="${featured.link}" class="featured-post">
            <img src="${featured.image}" alt="Featured" class="featured-img">
            <div class="featured-info">
                <h4>${featured.title}</h4>
                <span>${featured.info}</span>
            </div>
        </a>
        <div class="item-list"></div>
    `;

    renderTimelineItems(data.writing.posts, 'writing');
}


function renderSpeaking() {
    const speakingSection = document.querySelector('#speaking');
    const featured = data.speaking.featured;

    speakingSection.innerHTML = `
        <h2>Speaking</h2>
        <a href="${featured.link}" class="featured-post">
            <img src="${featured.image}" alt="Featured" class="featured-img">
            <div class="featured-info">
                <h4>${featured.title}</h4>
                <span>${featured.info}</span>
            </div>
        </a>
        <div class="item-list"></div>
    `;

    renderTimelineItems(data.speaking.talks, 'speaking');
}

function renderSocials() {
    const container = document.querySelector('#contact .contact-grid');
    container.innerHTML = data.socials.map(social => `
        <a href="${social.link}" class="contact-item">
            <span class="contact-label">${social.name}</span>
            <span class="contact-value">${social.value}</span>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderAbout();
    renderTimelineItems(data.projects, 'projects');
    renderWriting();
    renderSpeaking();
    renderTimelineItems(data.podcasts, 'podcasts');
    renderTimelineItems(data.sideProjects, 'side-projects');
    renderTimelineItems(data.education, 'education');
    renderSocials();
});
