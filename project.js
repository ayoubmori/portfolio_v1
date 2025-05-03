const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const projects = [
  {
    id: "1",
    title: "My Score - Football Analysis Application",
    image: "assets/imgs/my-score.png",
    description: "A football analytics web application to track live scores and statistics using Streamlit and Python.",
    tech: "Streamlit, Python, Pandas, Plotly",
    github: "https://github.com/ayoubmori/my-score", // Replace if actual repo differs
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7209570700792115200/"
  },
  {
    id: "2",
    title: "Movie & TV Show Explorer",
    image: "assets/imgs/movie_app_demo.jpg",
    description: "Explore and search for movies and TV shows using the TMDB API with detailed views and ratings.",
    tech: "Python, Flask, TMDB API, Requests",
    github: "https://github.com/ayoubmori/Movies-App",
    demo: "#"
  },
  {
    id: "3",
    title: "Coffee Shop Frontend Site",
    image: "assets/imgs/coffe-site.jpg",
    description: "A static frontend website for a fictional coffee shop with HTML and CSS.",
    tech: "HTML, CSS",
    github: "https://github.com/ayoubmori/coffee-shop-site",
    demo: "#"
  },
  {
    id: "4",
    title: "Coffee Shop Sales Dashboard",
    image: "assets/imgs/coffe-shop-sales.png",
    description: "A Power BI dashboard to visualize and analyze coffee shop sales trends and KPIs.",
    tech: "Power BI, Data Modeling, DAX",
    github: "https://github.com/ayoubmori/coffee_shop_dashboard_sales",
    demo: "#"
  },
  {
    id: "5",
    title: "Weather Forecast App",
    image: "assets/imgs/forcast-app.png",
    description: "Weather forecast application fetching real-time weather data using a weather API.",
    tech: "Python, API, Streamlit",
    github: "https://github.com/ayoubmori/weather-app",
    demo: "#"
  },
  {
    id: "6",
    title: "Predict Weather - ML Model",
    image: "assets/imgs/predict_weather_model.jpg",
    description: "A machine learning model to predict weather patterns based on historical data.",
    tech: "Python, Scikit-learn, Pandas, Matplotlib",
    github: "https://github.com/ayoubmori/predect-weather---mini-projet",
    demo: "#"
  }
];

const container = document.getElementById("project-container");
const project = projects.find(p => p.id === projectId);

if (project) {
  container.innerHTML = `
    <h1>${project.title}</h1>
    <img src="${project.image}" alt="${project.title}" class="project-banner" style="max-width: 100%; height: auto; border-radius: 8px;" />
    <p><strong>Description:</strong> ${project.description}</p>
    <p><strong>Tech Stack:</strong> ${project.tech}</p>
    <p>
      <a href="${project.github}" target="_blank">GitHub</a>
      ${project.demo !== "#" ? ` | <a href="${project.demo}" target="_blank">Live Demo</a>` : ""}
    </p>
  `;
} else {
  container.innerHTML = `<p>❌ Project not found. <a href="index.html">Back to Portfolio</a></p>`;
}
