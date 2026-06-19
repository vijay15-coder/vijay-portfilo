import React from 'react';
import './styles/LeetCode.css';

const LeetCode: React.FC = () => {
  const stats = {
    totalSolved: 350,
    contestRating: 1400,
    streak: 30,
    topPercentage: 25,
    easy: { solved: 128, total: 800, percentage: 16 },
    medium: { solved: 148, total: 1600, percentage: 9 },
    hard: { solved: 48, total: 700, percentage: 7 }
  };

  const topics = [
    'Arrays', 'Strings', 'Trees', 'Graphs', 'DP', 'Hash Maps',
    'Binary Search', 'Linked Lists', 'Stacks', 'Queues', 'Sorting',
    'Backtracking'
  ];

  return (
    <section className="leetcode-section">
      <div className="leetcode-container">
        <div className="leetcode-header">
          <h1>LeetCode <span className="highlight">Journey</span></h1>
        </div>

        <div className="leetcode-content">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-icon">
                <span>&lt;/&gt;</span>
              </div>
              <div className="profile-info">
                <h3>LeetCode Profile</h3>
                <p className="username">@V_ijaykum_ar</p>
              </div>
            </div>

            <div className="main-stat">
              <div className="stat-number">{stats.totalSolved}+</div>
              <div className="stat-label">Problems Solved</div>
              <div className="stat-sublabel">Across all difficulty levels</div>
            </div>

            <div className="difficulty-breakdown">
              <div className="difficulty-item">
                <div className="difficulty-header">
                  <span className="difficulty-dot easy"></span>
                  <span>Easy</span>
                  <span className="difficulty-count">{stats.easy.solved}+</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill easy-fill" style={{ width: `${stats.easy.percentage}%` }}></div>
                </div>
              </div>

              <div className="difficulty-item">
                <div className="difficulty-header">
                  <span className="difficulty-dot medium"></span>
                  <span>Medium</span>
                  <span className="difficulty-count">{stats.medium.solved}+</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill medium-fill" style={{ width: `${stats.medium.percentage}%` }}></div>
                </div>
              </div>

              <div className="difficulty-item">
                <div className="difficulty-header">
                  <span className="difficulty-dot hard"></span>
                  <span>Hard</span>
                  <span className="difficulty-count">{stats.hard.solved}+</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill hard-fill" style={{ width: `${stats.hard.percentage}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-value">{stats.contestRating}+</div>
              <div className="stat-name">Contest Rating</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-value">{stats.streak}+</div>
              <div className="stat-name">Streak</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-value">{stats.topPercentage}%</div>
              <div className="stat-name">Top</div>
            </div>
          </div>

          {/* Topics Card */}
          <div className="topics-card">
            <div className="topics-header">
              <div className="topics-icon">🚀</div>
              <h3>DSA Topics Mastered</h3>
            </div>

            <div className="topics-grid">
              {topics.map((topic, index) => (
                <div key={index} className="topic-tag">
                  {topic}
                </div>
              ))}
            </div>

            <div className="view-profile">
              <a href="https://leetcode.com/kavi_Andata" target="_blank" rel="noopener noreferrer">
                View LeetCode Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;