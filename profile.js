document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login.html';
    }

    const response = await fetch('/auth/user', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        localStorage.removeItem('token');
        window.location.href = '/login.html';
    }

    const user = await response.json();

    document.getElementById('userName').innerText = `Username: ${user.username}`;
    document.getElementById('userEmail').innerText = `Email: ${user.email}`;

    document.getElementById('propertyForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const image = document.getElementById('image').value;

        const response = await fetch('/property/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ description, price, image })
        });

        if (response.ok) {
            alert('Property added successfully');
        } else {
            alert('Error adding property');
        }
    });
});
