import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import {
  Code2, Files, Search, Settings, ChevronDown, ChevronRight, FileCode2,
  FileJson, FileText, Play, Plus, Users, MessageSquare, Terminal,
  PanelLeftClose, Sparkles, CircleHelp, Download, Save, Eye, LayoutGrid,
  ArrowRight, Check, Zap, Globe, UsersRound, CodeXml, Menu,
  FolderOpen, Trash2, Clock3, CirclePlus, Mail, LockKeyhole, EyeOff, UserRound
} from "lucide-react";

const starterFiles = {
  "index.html": {
    language: "html",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My CodeSync Project</title>
</head>
<body>
  <main class="card">
    <div class="badge">✦ YOUR FIRST PROJECT</div>
    <h1>Hello, <span>CodeSync!</span></h1>
    <p>Edit this HTML, CSS and JavaScript, then press Run.</p>
    <button id="helloButton">Click me</button>
    <p id="message" aria-live="polite"></p>
  </main>
  <script src="script.js"></script>
</body>
</html>`
  },
  "style.css": {
    language: "css",
    content: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Inter, Arial, sans-serif;
  color: #172033;
  background: linear-gradient(135deg, #e9f1ff, #f7edff);
}

.card {
  width: min(90%, 560px);
  padding: 48px;
  border-radius: 24px;
  background: white;
  box-shadow: 0 24px 70px #24345b20;
}

.badge {
  color: #6655e8;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

h1 {
  font-size: clamp(32px, 6vw, 52px);
  margin: 18px 0 12px;
}

h1 span {
  color: #715cf2;
}

p {
  line-height: 1.7;
  color: #68738a;
}

button {
  border: 0;
  border-radius: 12px;
  padding: 13px 20px;
  color: white;
  background: #715cf2;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background: #5b47dc;
}`
  },
  "script.js": {
    language: "javascript",
    content: `const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Great job — you just ran JavaScript! 🚀";
});`
  }
};

function IconButton({ label, children, onClick, active = false }) {
  return (
    <button className={`icon-button ${active ? "active" : ""}`} title={label} aria-label={label} onClick={onClick}>
      {children}
    </button>
  );
}

function LandingPage({ onStart, onDiscover }) {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <a className="landing-brand" href="#top" aria-label="CodeSync home"><span className="landing-logo"><Code2 size={21} /></span>Code<span>Sync</span></a>
        <div className="landing-links"><a href="#features">Features</a><a href="#workflow">How it works</a><button className="landing-link-button" onClick={onDiscover}>Discover</button><a href="#about">About</a></div>
        <div className="landing-nav-actions"><button className="yellow-button nav-cta" onClick={onStart}>Sign in <ArrowRight size={16}/></button></div>
      </nav>
      <main id="top">
        <section className="landing-hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"/> THE COLLABORATIVE CODING WORKSPACE</div>
            <h1>Build something<br/>great. <span>Together.</span></h1>
            <p className="hero-description">A shared space to write, run, and bring your web ideas to life. Start with HTML, CSS, and JavaScript — then build better things with your team.</p>
            <div className="hero-actions"><button className="yellow-button hero-cta" onClick={onStart}>Start coding Today <ArrowRight size={18}/></button><a className="outline-button" href="#features">Explore features</a></div>
            <div className="hero-proof"><span><Check size={14}/> No setup in the browser</span><span><Check size={14}/> HTML, CSS & JS</span><span><Check size={14}/> Made for teams</span></div>
          </div>
          <div className="hero-visual" aria-label="CodeSync editor preview">
            <div className="glow-orb"/><div className="mock-editor">
              <div className="mock-top"><div className="mock-dots"><i/><i/><i/></div><span>codesync / my-first-project</span><span className="mock-online"><i/> You</span></div>
              <div className="mock-body"><div className="mock-files"><b>EXPLORER</b><span>⌄　src</span><span className="mock-file active">◇　index.html</span><span className="mock-file">◇　style.css</span><span className="mock-file">◇　script.js</span><div className="mock-team"><b>YOUR WORKSPACE</b><div className="avatar-stack"><i>A</i><i>J</i><i>+</i></div></div></div>
              <div className="mock-code"><div className="mock-tab">◈ index.html <span>●</span></div><div className="code-lines"><p><em>1</em><span className="code-purple">&lt;!DOCTYPE</span> <span className="code-yellow">html</span><span className="code-purple">&gt;</span></p><p><em>2</em><span className="code-purple">&lt;html</span> <span className="code-cyan">lang</span>=<span className="code-green">"en"</span><span className="code-purple">&gt;</span></p><p><em>3</em>　<span className="code-purple">&lt;head&gt;</span></p><p><em>4</em>　　<span className="code-purple">&lt;title&gt;</span>Hello, world!<span className="code-purple">&lt;/title&gt;</span></p><p><em>5</em>　<span className="code-purple">&lt;/head&gt;</span></p><p><em>6</em>　<span className="code-purple">&lt;body&gt;</span></p><p><em>7</em>　　<span className="code-purple">&lt;h1&gt;</span><span className="code-white">Build together.</span><span className="code-purple">&lt;/h1&gt;</span></p><p><em>8</em>　　<span className="code-purple">&lt;p&gt;</span><span className="code-green">Your next idea starts here.</span><span className="code-purple">&lt;/p&gt;</span></p><p><em>9</em>　<span className="code-purple">&lt;/body&gt;</span></p><p><em>10</em><span className="code-purple">&lt;/html&gt;</span></p></div><div className="mock-status"><span>● HTML</span><span>UTF-8</span><span>Ln 7, Col 18</span></div></div>
              <div className="mock-preview"><div className="preview-mini-head"><span>LIVE PREVIEW</span><i/></div><div className="preview-mini"><div className="mini-badge">HELLO WORLD</div><h3>Build<br/><span>together.</span></h3><p>Your next idea starts here.</p><div className="mini-button">Let's go ↗</div><div className="mini-art"><div/><div/><div/></div></div></div></div>
              <div className="mock-bottom"><span><i/> All systems ready</span><span><Users size={13}/> Shared workspace <b>Preview mode</b></span></div>
            </div>
            <div className="float-card float-card-one"><span className="float-icon"><Zap size={15}/></span><span><b>Live preview</b><small>See changes instantly</small></span></div>
            <div className="float-card float-card-two"><div className="avatar-stack"><i>A</i><i>J</i><i>M</i></div><span><b>Made for teams</b><small>One space, shared ideas</small></span></div>
          </div>
        </section>
        <section className="trusted-strip"><span>BUILT FOR YOUR NEXT BIG IDEA</span><div><CodeXml size={17}/> HTML <i/> CSS <i/> JavaScript <i/> Collaboration</div></section>
        <section className="features-section" id="features"><div className="section-heading"><div className="eyebrow">LESS SETUP. MORE BUILDING.</div><h2>Everything you need to<br/><span>get into the flow.</span></h2><p>A simple, focused workspace to go from a blank page to a working idea.</p></div><div className="feature-grid"><article className="feature-card"><div className="feature-icon yellow"><Code2 size={21}/></div><h3>Code in one place</h3><p>Keep your HTML, CSS, and JavaScript together in a familiar editor built for getting things done.</p><a onClick={onStart}>Open the editor <ArrowRight size={14}/></a></article><article className="feature-card"><div className="feature-icon cyan"><Globe size={21}/></div><h3>See it come alive</h3><p>Run your project and view the result in the built-in preview without switching between tools.</p><a onClick={onStart}>Try the workspace <ArrowRight size={14}/></a></article><article className="feature-card"><div className="feature-icon purple"><UsersRound size={21}/></div><h3>Built to collaborate</h3><p>A foundation for shared rooms, teammate presence, and working on projects together.</p><a onClick={onStart}>Explore CodeSync <ArrowRight size={14}/></a></article></div></section>
        <section className="workflow-section" id="workflow"><div className="workflow-copy"><div className="eyebrow">YOUR WORKFLOW, SIMPLIFIED</div><h2>From first line<br/>to <span>first launch.</span></h2><p>Stay focused on what you want to create. CodeSync brings your files and your preview into one clean workspace.</p><button className="yellow-button" onClick={onStart}>Open your workspace <ArrowRight size={17}/></button></div><div className="workflow-steps"><div><span>01</span><div><h3>Create a project</h3><p>Start with the essential web files and give your idea a name.</p></div><Check size={17}/></div><div><span>02</span><div><h3>Write your code</h3><p>Edit HTML, style it with CSS, and add behavior with JavaScript.</p></div><Check size={17}/></div><div><span>03</span><div><h3>Run and refine</h3><p>Preview your changes, save your work, and keep improving.</p></div><Check size={17}/></div></div></section>
        <section className="final-cta" id="about"><div className="cta-glow"/><div className="eyebrow">YOUR NEXT PROJECT STARTS HERE</div><h2>Have an idea?<br/><span>Let's build it.</span></h2><p>Open CodeSync and turn your first line of code into something real.</p><button className="yellow-button" onClick={onStart}>Start coding <ArrowRight size={17}/></button></section>
      </main>
      <footer className="landing-footer"><a className="landing-brand" href="#top"><span className="landing-logo"><Code2 size={19}/></span>Code<span>Sync</span></a><span>Build together. Learn together.</span><span>© 2026 CodeSync</span></footer>
    </div>
  );
}



function DiscoverPage({ onBack, onStart }) {
  const [activeCategory, setActiveCategory] = useState("For You");

  const categories = [
    "For You",
    "Trending",
    "Dev News",
    "Projects",
    "Ideas",
  ];

  return (
    <div className="discover-page">

      {/* NAVBAR */}
      <header className="discover-navbar">
        <button className="discover-logo" onClick={onBack}>
          <Code2 size={24} />
          <span>Code<span>Sync</span></span>
        </button>

        <div className="discover-nav-actions">
          <button className="discover-home-button" onClick={onBack}>
            Back to Home
          </button>

          <button className="yellow-button discover-start-button" onClick={onStart}>
            Get Started
            <ArrowRight size={16} />
          </button>
        </div>
      </header>


      {/* HERO */}
      <section className="discover-hero">

        <span className="discover-eyebrow">
          <Sparkles size={15} />
          DISCOVER
        </span>

        <h1>
          What's happening in the
          <span> developer world.</span>
        </h1>

        <p>
          Explore trending technologies, developer news,
          inspiring projects and ideas worth building.
        </p>

      </section>


      {/* CATEGORY NAVIGATION */}
      <div className="discover-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "discover-category active"
                : "discover-category"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>


      {/* MAIN CONTENT */}
      <main className="discover-content">

        {/* FEATURED STORY */}
        <article className="discover-featured">

          <div className="discover-card-label">
            <Zap size={15} />
            TRENDING NOW
          </div>

          <div className="discover-featured-content">

            <div>
              <span className="discover-small-label">
                DEVELOPMENT
              </span>

              <h2>
                The technologies developers can't stop
                talking about.
              </h2>

              <p>
                From AI-assisted development to local-first
                applications, explore the ideas shaping the
                future of software.
              </p>
            </div>

            <div className="discover-tags">
              <span>AI</span>
              <span>Web Development</span>
              <span>Open Source</span>
            </div>

            <button className="discover-read-button">
              Read story
              <ArrowRight size={16} />
            </button>

          </div>

          <div className="discover-code-art">
            <Code2 size={70} />
            <span>{"{ }"}</span>
            <span>{"</>"}</span>
          </div>

        </article>


        {/* RIGHT SIDEBAR */}
        <aside className="discover-sidebar">

          <div className="discover-sidebar-header">
            <span>WHAT'S HOT</span>
            <span className="live-dot"></span>
          </div>

          <div className="hot-list">

            <button>
              <span>01</span>
              <div>
                <strong>AI Coding Tools</strong>
                <small>Development</small>
              </div>
              <ArrowRight size={15} />
            </button>

            <button>
              <span>02</span>
              <div>
                <strong>Modern React</strong>
                <small>Frontend</small>
              </div>
              <ArrowRight size={15} />
            </button>

            <button>
              <span>03</span>
              <div>
                <strong>WebAssembly</strong>
                <small>Web Platform</small>
              </div>
              <ArrowRight size={15} />
            </button>

            <button>
              <span>04</span>
              <div>
                <strong>Rust</strong>
                <small>Programming</small>
              </div>
              <ArrowRight size={15} />
            </button>

            <button>
              <span>05</span>
              <div>
                <strong>Local-first Apps</strong>
                <small>Architecture</small>
              </div>
              <ArrowRight size={15} />
            </button>

          </div>

          <div className="discover-trending-tags">
            <span>TRENDING TAGS</span>

            <div>
              <button>#AI</button>
              <button>#React</button>
              <button>#WebDev</button>
              <button>#OpenSource</button>
            </div>
          </div>

        </aside>


        {/* DEV NEWS */}
        <article className="discover-small-card">

          <div className="discover-card-label">
            <Globe size={15} />
            DEV NEWS
          </div>

          <h3>
            What's changing in web development this week?
          </h3>

          <p>
            A quick look at tools, frameworks and updates
            developers should know about.
          </p>

          <div className="discover-card-footer">
            <span>4 min read</span>

            <button>
              Read
              <ArrowRight size={14} />
            </button>
          </div>

        </article>


        {/* PROJECT SHOWCASE */}
        <article className="discover-small-card">

          <div className="discover-card-label">
            <LayoutGrid size={15} />
            PROJECT SHOWCASE
          </div>

          <h3>
            A collaborative workspace built for developers.
          </h3>

          <p>
            Discover interesting projects and see how other
            developers turn ideas into working products.
          </p>

          <div className="discover-card-footer">
            <span>Community</span>

            <button>
              View project
              <ArrowRight size={14} />
            </button>
          </div>

        </article>


        {/* CHALLENGE */}
        <article className="discover-small-card discover-challenge">

          <div className="discover-card-label">
            <CodeXml size={15} />
            QUICK CHALLENGE
          </div>

          <h3>
            Can you build this UI in 30 minutes?
          </h3>

          <p>
            Practice your frontend skills with a small
            challenge and turn the idea into your own design.
          </p>

          <div className="discover-card-footer">
            <span>Frontend</span>

            <button onClick={onStart}>
              Try challenge
              <ArrowRight size={14} />
            </button>
          </div>

        </article>

      </main>


      {/* BOTTOM */}
      <div className="discover-more">
        <span>More discoveries coming soon.</span>
      </div>

    </div>
  );
}


function LoginPage({ onBack, onSuccess }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

 const handleSubmit = async (event) => {
  event.preventDefault();
  setError("");

  if (
    !email.trim() ||
    !password ||
    (mode === "signup" && !name.trim())
  ) {
    setError(
      mode === "signup"
        ? "Complete all fields to continue."
        : "Enter your email and password to continue."
    );
    return;
  }

  try {
    // If user is signing up, create the account first
    if (mode === "signup") {
      const signupResponse = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            password,
          }),
        }
      );

      const signupData = await signupResponse.json();

      if (!signupResponse.ok) {
        setError(signupData.message || "Could not create account.");
        return;
      }
    }

    // Login after signup, or login normally
    const loginResponse = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      }
    );

    const loginData = await loginResponse.json();

    if (!loginResponse.ok) {
      setError(loginData.message || "Could not log in.");
      return;
    }

    // Save JWT for authenticated requests
    localStorage.setItem("codesync-token", loginData.token);

    // Save basic user information
    localStorage.setItem(
      "codesync-user",
      JSON.stringify(loginData.user)
    );

    // Remove old guest/demo session if one exists
    localStorage.removeItem("codesync-demo-session");

    onSuccess(loginData.user);
  } catch (error) {
    console.error("Authentication error:", error);

    setError(
      "Could not connect to the CodeSync server. Please try again."
    );
  }
};

  const handleDemo = () => {
    try {
      localStorage.setItem(
      "codesync-demo-session",
      JSON.stringify({
        name: "Guest",
        email: "",
        isGuest: true,
        signedInAt: new Date().toISOString()
      })
      );
    } catch {}

    onSuccess();
  };

  return (
    <main className="auth-page">
      <div className="auth-glow auth-glow-one"/><div className="auth-glow auth-glow-two"/>
      <header className="auth-header">
        <button className="landing-brand auth-brand" onClick={onBack} aria-label="Back to CodeSync home"><span className="landing-logo"><Code2 size={21}/></span>Code<span>Sync</span></button>
        <button className="auth-back" onClick={onBack}>← Back to home</button>
      </header>
      <section className="auth-layout">
        <div className="auth-story">
          <div className="eyebrow"><span className="eyebrow-dot"/> YOUR IDEAS, IN ONE PLACE</div>
          <h1>Make room for<br/>your next <span>big idea.</span></h1>
          <p>
            Sign in to pick up where you left off. Your coding workspace is waiting.
          </p>

          <button
            type="button"
            className="yellow-button hero-cta"
            onClick={handleDemo}
          >
            Try Free Demo
            <ArrowRight size={18} />
          </button>

          <div className="auth-benefits">
            <div><span><Check size={15}/></span><div><strong>Your projects, organized</strong><small>Keep your web experiments together.</small></div></div>
            <div><span><Check size={15}/></span><div><strong>A focused coding space</strong><small>Write, run, and refine in one place.</small></div></div>
            <div><span><Check size={15}/></span><div><strong>Built for what comes next</strong><small>A starting point for team collaboration.</small></div></div>
          </div>
          <div className="auth-code-art" aria-hidden="true"><span className="art-line art-line-one"/><span className="art-line art-line-two"/><span className="art-line art-line-three"/><span className="art-bracket">{`{ }`}</span><span className="art-caption">// ideas become reality</span></div>
        </div>
        <div className="auth-card">
          <div className="auth-card-mark"><Code2 size={23}/></div>
          <div className="auth-card-heading"><h2>{mode === "login" ? "Welcome back" : "Create your account"}</h2><p>{mode === "login" ? "Enter your details to access your workspace." : "Start building with CodeSync today."}</p></div>
          <div className="auth-tabs"><button className={mode === "login" ? "selected" : ""} onClick={() => { setMode("login"); setError(""); }}>Log in</button><button className={mode === "signup" ? "selected" : ""} onClick={() => { setMode("signup"); setError(""); }}>Sign up</button></div>
          <form className="auth-form" onSubmit={handleSubmit}>
            {mode === "signup" && <label>Your name<div className="auth-input-wrap"><UserRound size={17}/><input autoComplete="name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name"/></div></label>}
            <label>Email address<div className="auth-input-wrap"><Mail size={17}/><input type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required/></div></label>
            <label>Password<div className="auth-input-wrap"><LockKeyhole size={17}/><input type={showPassword ? "text" : "password"} autoComplete={mode === "login" ? "current-password" : "new-password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required/><button className="auth-eye" type="button" onClick={() => setShowPassword(v => !v)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={16}/> : <Eye size={16}/>}</button></div></label>
            {error && <p className="auth-error" role="alert">{error}</p>}
            <button className="yellow-button auth-submit" type="submit">{mode === "login" ? "Log in to CodeSync" : "Create account"}<ArrowRight size={17}/></button>
          </form>
          <div className="auth-divider"><span/> <small>OR CONTINUE YOUR JOURNEY</small> <span/></div>
          <p className="auth-demo-note">
            <LockKeyhole size={14}/>
            Account authentication powered by the CodeSync backend.
          </p>
          <p className="auth-switch">{mode === "login" ? "New to CodeSync?" : "Already have an account?"} <button onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }}>{mode === "login" ? "Create an account" : "Log in"}</button></p>
        </div>
      </section>
      <footer className="auth-footer"><span>© 2026 CodeSync</span><span>Build together. Learn together.</span></footer>
    </main>
  );
}

export default function App() {
  const [view, setView] = useState("landing");
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
      const restoreSession = async () => {
        const token = localStorage.getItem("codesync-token");

        // No real login token exists
        if (!token) {
          setAuthLoading(false);
          return;
        }

        try {
          const response = await fetch(
            "http://localhost:5000/api/auth/me",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            localStorage.removeItem("codesync-token");
            localStorage.removeItem("codesync-user");
            setAuthUser(null);
            setAuthLoading(false);
            return;
          }

          const data = await response.json();

          setAuthUser(data.user);
          setView("dashboard");

          localStorage.setItem(
            "codesync-user",
            JSON.stringify(data.user)
          );
        } catch (error) {
          console.error("Session restore error:", error);
        } finally {
          setAuthLoading(false);
        }
      };

      restoreSession();
    }, []);

  const [projects, setProjects] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("codesync-projects-v1"));
      if (Array.isArray(stored) && stored.length) return stored;
      const oldFiles = JSON.parse(localStorage.getItem("codesync-starter-files")) || starterFiles;
      const oldName = localStorage.getItem("codesync-starter-project-name") || "My First Project";
      return [{ id: "project-" + Date.now(), name: oldName, files: oldFiles, updatedAt: new Date().toISOString() }];
    } catch {
      return [{ id: "project-" + Date.now(), name: "My First Project", files: starterFiles, updatedAt: new Date().toISOString() }];
    }
  });
  const [currentProjectId, setCurrentProjectId] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("codesync-projects-v1"));
      return Array.isArray(stored) && stored[0]?.id ? stored[0].id : null;
    } catch { return null; }
  });
  const currentProject = projects.find((project) => project.id === currentProjectId) || projects[0];
  const [files, setFiles] = useState(() => currentProject?.files || starterFiles);
  const [activeFile, setActiveFile] = useState("index.html");
  const [preview, setPreview] = useState("");
  const [showPreview, setShowPreview] = useState(true);
  const [showConsole, setShowConsole] = useState(false);
  const [consoleMessage, setConsoleMessage] = useState("Ready. Your project output will appear here.");
  const [projectName, setProjectName] = useState(() => currentProject?.name || "My First Project");
  const [savedMessage, setSavedMessage] = useState("Saved in this browser");
  const [dashboardSearch, setDashboardSearch] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("codesync-token");
    localStorage.removeItem("codesync-user");
    localStorage.removeItem("codesync-demo-session");

    setAuthUser(null);
    setView("landing");
  };

  useEffect(() => {
    try { localStorage.setItem("codesync-projects-v1", JSON.stringify(projects)); }
    catch { /* The dashboard will still work for this session if storage is full. */ }
  }, [projects]);

  useEffect(() => {
    if (view !== "editor" || !currentProjectId) return;
    setSavedMessage("Saving locally…");
    const timer = window.setTimeout(() => {
      setProjects((previous) => previous.map((project) => project.id === currentProjectId
        ? { ...project, name: projectName, files, updatedAt: new Date().toISOString() }
        : project));
      try {
        localStorage.setItem("codesync-starter-files", JSON.stringify(files));
        localStorage.setItem("codesync-starter-project-name", projectName);
        setSavedMessage("Auto-saved in this browser");
      } catch { setSavedMessage("Could not save in this browser"); }
    }, 650);
    return () => window.clearTimeout(timer);
  }, [files, projectName, currentProjectId, view]);

  const createProject = () => {
    const name = window.prompt("What would you like to name your project?", "My New Project");
    if (!name || !name.trim()) return;
    const id = "project-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7);
    const project = { id, name: name.trim(), files: JSON.parse(JSON.stringify(starterFiles)), updatedAt: new Date().toISOString() };
    setProjects((previous) => [project, ...previous]);
    setCurrentProjectId(id);
    setProjectName(project.name);
    setFiles(project.files);
    setActiveFile("index.html");
    setPreview("");
    setShowConsole(false);
    setView("editor");
  };

  const openProject = (project) => {
    setCurrentProjectId(project.id);
    setProjectName(project.name);
    setFiles(project.files || starterFiles);
    setActiveFile(Object.keys(project.files || starterFiles)[0] || "index.html");
    setPreview("");
    setShowConsole(false);
    setView("editor");
  };

  const deleteProject = (project) => {
    if (!window.confirm(`Delete “${project.name}”? This cannot be undone.`)) return;
    const remaining = projects.filter((item) => item.id !== project.id);
    if (!remaining.length) {
      const replacement = { id: "project-" + Date.now(), name: "My First Project", files: JSON.parse(JSON.stringify(starterFiles)), updatedAt: new Date().toISOString() };
      setProjects([replacement]);
      setCurrentProjectId(replacement.id);
    } else {
      setProjects(remaining);
      if (currentProjectId === project.id) setCurrentProjectId(remaining[0].id);
    }
  };

  const language = files[activeFile]?.language || "plaintext";

  const buildPreview = () => {
    const html = files["index.html"]?.content || "";
    const css = files["style.css"]?.content || "";
    const js = files["script.js"]?.content || "";
    const safeCss = css.replace(/<\/style/gi, "<\\/style");
    const safeJs = js.replace(/<\/script/gi, "<\\/script");
    const scriptTag = "<scr" + "ipt>" + safeJs + "</scr" + "ipt>";
    const result = html.includes("</head>")
      ? html.replace("</head>", `<style>${safeCss}</style></head>`)
      : `<style>${safeCss}</style>${html}`;
    const finalHtml = result.includes("</body>")
      ? result.replace("</body>", `${scriptTag}</body>`)
      : `${result}${scriptTag}`;
    setPreview(finalHtml);
    setConsoleMessage("Preview updated successfully.");
    setShowPreview(true);
    setShowConsole(true);
  };

  const updateCurrentFile = (value) => {
    setFiles((previous) => ({
      ...previous,
      [activeFile]: { ...previous[activeFile], content: value ?? "" }
    }));
    setSavedMessage("Unsaved local changes");
  };

  const addFile = () => {
    const name = window.prompt("Enter a file name (example: about.html):");
    if (!name) return;
    if (!/^[\w.-]+\.(html|css|js)$/.test(name)) {
      window.alert("Please use a simple .html, .css, or .js file name.");
      return;
    }
    if (files[name]) {
      window.alert("A file with that name already exists.");
      return;
    }
    const extension = name.split(".").pop();
    const languageForExtension = { html: "html", css: "css", js: "javascript" }[extension];
    setFiles((previous) => ({ ...previous, [name]: { language: languageForExtension, content: "" } }));
    setActiveFile(name);
  };

  const saveLocally = () => {
    try {
      const updatedAt = new Date().toISOString();
      setProjects((previous) => previous.map((project) => project.id === currentProjectId
        ? { ...project, name: projectName, files, updatedAt }
        : project));
      localStorage.setItem("codesync-starter-files", JSON.stringify(files));
      localStorage.setItem("codesync-starter-project-name", projectName);
      setSavedMessage("Saved in this browser");
    } catch {
      setSavedMessage("Could not save in this browser");
    }
  };

  const downloadProject = () => {
    const content = Object.entries(files).map(([name, file]) => `/* ===== ${name} ===== */\n${file.content}`).join("\n\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "codesync-project.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const fileIcon = (name) => {
    if (name.endsWith(".html")) return <FileCode2 size={15} className="html-icon" />;
    if (name.endsWith(".css")) return <FileText size={15} className="css-icon" />;
    return <FileJson size={15} className="js-icon" />;
  };

  if (view === "landing") {
    return (
      <LandingPage
        onStart={() => setView("login")}
        onDiscover={() => setView("discover")}
      />
    );
  }

  if (view === "discover") {
  return (
    <DiscoverPage
      onBack={() => setView("landing")}
      onStart={() => setView("login")}
    />
  );
}



 if (view === "login")
  return (
    <LoginPage
      onBack={() => setView("landing")}
      onSuccess={(user) => {
        if (user) {
          setAuthUser(user);
        }

        setView("dashboard");
      }}
    />
  );

  if (view === "dashboard") {
    const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(dashboardSearch.toLowerCase()));
    return (
      <div className="dashboard-page">
        <header className="dashboard-topbar">
          <button className="landing-brand dashboard-brand" onClick={() => setView("landing")}><span className="landing-logo"><Code2 size={21} /></span>Code<span>Sync</span></button>
          <div className="dashboard-top-actions"><button className="auth-back" onClick={handleLogout}>Logout</button><span className="local-badge"><span className="status-dot" /> Browser storage</span><button className="yellow-button" onClick={createProject}><CirclePlus size={17}/> New project</button></div>
        </header>
        <main className="dashboard-main">
          <div className="dashboard-heading"><div><div className="eyebrow"><span className="eyebrow-dot"/> YOUR WORKSPACE</div><h1>My <span>Projects.</span></h1><p>Pick up where you left off, or start building something new.</p></div><div className="project-count"><FolderOpen size={18}/><strong>{projects.length}</strong><span>{projects.length === 1 ? "project" : "projects"}</span></div></div>
          <div className="dashboard-toolbar"><div className="dashboard-search"><Search size={17}/><input value={dashboardSearch} onChange={(event) => setDashboardSearch(event.target.value)} placeholder="Search your projects…" aria-label="Search projects"/></div><span className="dashboard-storage-note"><Save size={14}/> Automatically saved on this device</span></div>
          {filteredProjects.length ? <div className="project-grid">{filteredProjects.map((project) => {
            const names = Object.keys(project.files || {});
            const stamp = project.updatedAt ? new Date(project.updatedAt).toLocaleString([], { dateStyle: "medium", timeStyle: "short" }) : "Not yet saved";
            return <article className="project-card" key={project.id}><div className="project-card-art"><div className="project-card-icon"><Code2 size={23}/></div><span className="project-card-language">HTML · CSS · JS</span><div className="project-art-lines"><i/><i/><i/><i/></div></div><div className="project-card-content"><div className="project-card-title"><h2>{project.name}</h2><button className="project-delete" title={`Delete ${project.name}`} aria-label={`Delete ${project.name}`} onClick={() => deleteProject(project)}><Trash2 size={16}/></button></div><p>{names.length} {names.length === 1 ? "file" : "files"} · {names.slice(0, 3).join(", ")}{names.length > 3 ? "…" : ""}</p><div className="project-card-meta"><span><Clock3 size={13}/>{stamp}</span><button className="project-open" onClick={() => openProject(project)}>Open project <ArrowRight size={15}/></button></div></div></article>;
          })}</div> : <div className="dashboard-empty"><div className="dashboard-empty-icon"><Search size={23}/></div><h2>No projects found</h2><p>Try another search, or create a new project.</p><button className="yellow-button" onClick={createProject}><Plus size={16}/> New project</button></div>}
          <div className="dashboard-tip"><Sparkles size={17}/><div><strong>Your work stays on this device</strong><p>CodeSync saves projects automatically in this browser. They won't sync to other devices until we connect a database.</p></div></div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand brand-home" onClick={() => setView("landing")} title="Back to landing page">
          <div className="brand-mark"><Code2 size={22} /></div>
          <span>Code<span className="brand-accent">Sync</span></span>
          <span className="beta-pill">WORKSPACE</span>
        </button>
        <div className="topbar-center">
          <span className="project-dot" />
          <input className="project-name" value={projectName} onChange={(e) => setProjectName(e.target.value)} aria-label="Project name" />
          <ChevronDown size={15} />
        </div>
        <div className="topbar-actions">
          <span className="save-status"><span className="status-dot" />{savedMessage}</span>
          <button className="secondary-button" onClick={() => { saveLocally(); setView("dashboard"); }}><FolderOpen size={15} /> My Projects</button>
          <button className="secondary-button" onClick={saveLocally}><Save size={15} /> Save</button>
          <button className="run-button" onClick={buildPreview}><Play size={15} fill="currentColor" /> Run</button>
        </div>
      </header>

      <div className="workspace">
        <aside className="activitybar">
          <IconButton label="Explorer" active><Files size={20} /></IconButton>
          <IconButton label="Search"><Search size={20} /></IconButton>
          <div className="activity-spacer" />
          <IconButton label="Help"><CircleHelp size={19} /></IconButton>
          <IconButton label="Settings"><Settings size={20} /></IconButton>
        </aside>

        <aside className="sidebar">
          <div className="sidebar-heading">
            <span>EXPLORER</span>
            <IconButton label="Collapse explorer"><PanelLeftClose size={16} /></IconButton>
          </div>
          <div className="project-folder"><ChevronDown size={15} /><span className="folder-symbol">▰</span>{projectName.toUpperCase()}</div>
          <div className="file-list">
            {Object.keys(files).map((name) => (
              <button key={name} className={`file-row ${activeFile === name ? "selected" : ""}`} onClick={() => setActiveFile(name)}>
                {fileIcon(name)}<span>{name}</span>{activeFile === name && <span className="file-unsaved">●</span>}
              </button>
            ))}
          </div>
          <button className="add-file-button" onClick={addFile}><Plus size={15} /> New file</button>
          <div className="sidebar-bottom">
            <div className="starter-note"><Sparkles size={16} /><div><strong>You're learning!</strong><p>Make a change, then press Run to see it.</p></div></div>
          </div>
        </aside>

        <main className="editor-area">
          <div className="tabs-bar">
            <div className="active-tab">{fileIcon(activeFile)}<span>{activeFile}</span><span className="tab-dot">●</span></div>
            <div className="tab-actions">
              <span className="language-label">{language}</span>
              <IconButton label="Download project" onClick={downloadProject}><Download size={16} /></IconButton>
            </div>
          </div>
          <div className="editor-caption">
            <span><span className="muted">src</span><ChevronRight size={13} />{activeFile}</span>
            <span className="local-badge">LOCAL WORKSPACE</span>
          </div>
          <div className="monaco-wrap">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              path={activeFile}
              value={files[activeFile]?.content || ""}
              onChange={updateCurrentFile}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'Cascadia Code', 'Fira Code', Consolas, monospace",
                fontLigatures: true,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 18 },
                roundedSelection: true,
                renderLineHighlight: "all",
                tabSize: 2
              }}
            />
          </div>
          <div className="editor-footer">
            <span>Ln 1, Col 1</span><span>{language.toUpperCase()}</span><span>UTF-8</span><span>Spaces: 2</span>
          </div>
        </main>

        {showPreview && (
          <section className="preview-area">
            <div className="preview-header">
              <div className="preview-title"><Eye size={16} /><span>LIVE PREVIEW</span><span className="preview-live-dot" /></div>
              <div className="preview-actions">
                <IconButton label="Refresh preview" onClick={buildPreview}><Play size={14} /></IconButton>
                <IconButton label="Hide preview" onClick={() => setShowPreview(false)}><PanelLeftClose size={15} /></IconButton>
              </div>
            </div>
            <div className="browser-bar">
              <div className="browser-dots"><i /><i /><i /></div>
              <div className="browser-address"><span className="lock">⌑</span> codesync.local/preview</div>
              <button className="browser-run" onClick={buildPreview}><Play size={12} /> Run</button>
            </div>
            <div className="preview-frame">
              {preview ? (
                <iframe title="Code preview" srcDoc={preview} sandbox="allow-scripts" />
              ) : (
                <div className="preview-empty">
                  <div className="preview-empty-icon"><LayoutGrid size={25} /></div>
                  <h2>Your preview lives here</h2>
                  <p>Make changes in the editor and press Run to see your website.</p>
                  <button className="run-button" onClick={buildPreview}><Play size={14} fill="currentColor" /> Run project</button>
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      {showConsole && (
        <section className="console-panel">
          <div className="console-header">
            <div className="console-title"><Terminal size={15} /><span>OUTPUT</span></div>
            <button className="console-close" onClick={() => setShowConsole(false)}>Hide ×</button>
          </div>
          <div className="console-line"><span className="console-prompt">›</span>{consoleMessage}</div>
        </section>
      )}

      <footer className="statusbar">
        <div className="status-left"><span className="status-branch">⌘ main</span><span>CodeSync Starter</span></div>
        <div className="status-right"><Users size={14} /><span>Solo mode</span><span className="status-divider">|</span><MessageSquare size={14} /><span>Collaboration comes next</span></div>
      </footer>
    </div>
  );
}