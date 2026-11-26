const container = document.getElementById("user-container");

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Could not load users");
        const users = await response.json();

        users.forEach(user => {
            const card = document.createElement("div");

            card.className = "user-card";

            card.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = "<p>Failed to load users.</p>";
        console.log(error);
    }
}

fetchUsers();
