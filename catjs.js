function interpretScore() {
    const scoreInput = document.getElementById("scoreInput").value;
    const resultDiv = document.getElementById("result");
    const score = parseInt(scoreInput);

    if (isNaN(score)) {
        resultDiv.innerHTML = "<p class='error'>Please enter a valid score.</p>";
        return;
    }

    let category = "";
    let recommendations = "";

    if (score < 80) {
        category = "Intellectual Disability";
        recommendations = `
            <p><strong>Category:</strong> Intellectual Disability</p>
            <p>This score range suggests challenges in adaptive functioning and cognitive development. Individuals in this range may face difficulties in academic, social, and practical domains. The following recommendations are tailored to support growth and development:</p>
            <ul>
                <li><strong>Early Intervention:</strong> If this score was obtained for a child, early intervention programs can make a significant difference. These programs often include speech therapy, occupational therapy, and specialized educational plans tailored to the child's needs.</li>
                <li><strong>Skill Development:</strong> Emphasize the development of daily living skills, such as personal hygiene, cooking, and money management, to enhance independence. Use visual aids, routines, and step-by-step instructions to teach these skills.</li>
                <li><strong>Individualized Education Plans (IEPs):</strong> For school-aged individuals, collaborate with educators to create an IEP that focuses on strengths while addressing areas of need. Ensure accommodations and modifications are in place for learning success.</li>
                <li><strong>Supportive Environment:</strong> Build a network of supportive family members, friends, and professionals who can provide emotional and practical support. Advocacy groups and community services can also offer valuable resources.</li>
                <li><strong>Recreational Opportunities:</strong> Encourage participation in recreational activities that build social skills and confidence, such as art classes, sports, or music programs tailored to the individual's interests and abilities.</li>
            </ul>`;
    } else if (score >= 80 && score < 90) {
        category = "Below Average";
        recommendations = `
            <p><strong>Category:</strong> Below Average</p>
            <p>This score range indicates below-average cognitive abilities but does not preclude growth, learning, and success. Individuals in this range often benefit from structured support to enhance their strengths and address challenges. Recommendations include:</p>
            <ul>
                <li><strong>Educational Support:</strong> Collaborate with teachers and educational specialists to create a structured learning plan. Small class sizes, additional tutoring, and targeted instruction can help improve academic performance.</li>
                <li><strong>Skill Building:</strong> Focus on practical skills that align with personal interests and career goals. For example, vocational training programs can provide hands-on experience and prepare individuals for meaningful employment.</li>
                <li><strong>Confidence Building:</strong> Engage in activities that foster a sense of accomplishment. This might include sports, arts, or other hobbies where effort leads to visible progress.</li>
                <li><strong>Social Skills Development:</strong> Provide opportunities to practice communication, collaboration, and interpersonal skills through group activities, community programs, or counseling sessions.</li>
                <li><strong>Encouragement and Positive Reinforcement:</strong> Celebrate small successes to build motivation and self-esteem. Use constructive feedback to address challenges without discouragement.</li>
            </ul>`;
    } else if (score >= 90 && score <= 110) {
        category = "Average";
        recommendations = `
            <p><strong>Category:</strong> Average</p>
            <p>This score range reflects typical cognitive abilities. Individuals in this range often excel when provided with balanced opportunities for growth. Recommendations include:</p>
            <ul>
                <li><strong>Explore Interests:</strong> Encourage exploration of a wide range of activities to discover personal passions. Hobbies, sports, and extracurricular activities can lead to personal fulfillment and skill development.</li>
                <li><strong>Set Goals:</strong> Establish short-term and long-term goals to provide direction and purpose. Break these goals into manageable steps to ensure steady progress.</li>
                <li><strong>Develop Critical Thinking:</strong> Engage in activities that promote critical thinking and problem-solving skills, such as puzzles, debates, or project-based learning. These skills are valuable in both academic and real-world settings.</li>
                <li><strong>Social Connection:</strong> Foster strong relationships through regular social interaction. Participation in clubs, volunteer work, or community organizations can build a sense of belonging and enhance interpersonal skills.</li>
                <li><strong>Work-Life Balance:</strong> Emphasize the importance of balancing academics, work, and leisure. Encourage mindfulness practices to reduce stress and maintain mental well-being.</li>
            </ul>`;
    } else if (score > 110 && score <= 119) {
        category = "Above Average";
        recommendations = `
            <p><strong>Category:</strong> Above Average</p>
            <p>This score range reflects above-average cognitive abilities. Individuals in this range often excel in analytical thinking, problem-solving, and creative pursuits. To nurture their potential, consider the following:</p>
            <ul>
                <li><strong>Challenge with Complexity:</strong> Provide opportunities to tackle complex and stimulating problems. Advanced classes, puzzles, and logic games can be particularly engaging.</li>
                <li><strong>Encourage Leadership Roles:</strong> Offer opportunities to lead group projects, clubs, or community initiatives. These experiences build confidence and foster valuable leadership skills.</li>
                <li><strong>Promote Creative Expression:</strong> Support creative outlets such as art, writing, music, or design. Encourage participation in workshops, competitions, or public showcases.</li>
                <li><strong>Broaden Horizons:</strong> Encourage exploration of new fields, cultures, and ideas. Traveling, attending lectures, or participating in diverse activities can provide fresh perspectives and insights.</li>
                <li><strong>Balance Excellence with Well-Being:</strong> While striving for excellence, ensure that mental and physical health remain priorities. Mindfulness practices and recreational activities can help maintain balance.</li>
            </ul>`;
    } else if (score >= 120) {
        category = "Gifted";
        recommendations = `
            <p><strong>Category:</strong> Gifted</p>
            <p>This score range indicates exceptional cognitive abilities. Gifted individuals often display heightened sensitivity, creativity, and curiosity. To support their growth, consider the following:</p>
            <ul>
                <li><strong>Embrace Overexcitabilities:</strong> Gifted individuals often experience overexcitabilities in areas like intellectual curiosity, emotional intensity, or sensory perception. Encourage healthy expression of these traits through journaling, artistic pursuits, or engaging discussions.</li>
                <li><strong>Provide Intellectual Stimulation:</strong> Offer challenging and diverse opportunities for learning. Advanced placement courses, dual enrollment programs, or independent research projects can keep gifted minds engaged.</li>
                <li><strong>Support Emotional Needs:</strong> Gifted individuals may feel isolated or misunderstood. Encourage connections with like-minded peers through gifted programs, clubs, or online communities.</li>
                <li><strong>Foster Creativity:</strong> Allow space for imaginative thinking and innovation. Activities like creative writing, music composition, or design challenges can be deeply fulfilling.</li>
                <li><strong>Encourage Balance:</strong> Gifted individuals may feel pressure to overachieve. Teach the importance of rest, self-care, and leisure to prevent burnout and maintain overall well-being.</li>
            </ul>`;
    }

    resultDiv.innerHTML = `
        <h2>${category}</h2>
        ${recommendations}
    `;
}
