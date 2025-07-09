fetch('data.json')
.then(response=>response.json())
.then(data=>{
    const profileDiv=document.getElementById('profile');
    profileDiv.innerHTML=`
    <p><strong>Name:</strong>${data.name}</p>
    <p><strong>Email:</strong>${date.email}</p>
    <p><strong>Age:</strong>${date.age}</p>
    `;
})
.catch(error=>{
    console.error('Error loading JSON:',error);
});