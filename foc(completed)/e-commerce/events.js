document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = [
        "Surya Narayanan K V",
        "Sanjay",
        "Indraneel",
        "Sooryadev",
        "Sajai",
        "Ansaf",
        "Krish"
    ];
    const teamList = document.getElementById('team-list');

    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member';
        
        const name = document.createElement('p');
        name.textContent = member;
        
        memberDiv.appendChild(name);
        teamList.appendChild(memberDiv);
    });
});