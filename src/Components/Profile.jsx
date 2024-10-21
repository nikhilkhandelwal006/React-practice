function Profile(){
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
            name="Alice"
            age={30}
            greeting={
                <div>
                    <strong>Hi Alice, have a wonderful day</strong>
                </div>
            }>
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
            name="Bob"
            age={25}
            greeting={
                <div>
                    <strong>Hi Alice, have a wonderful day</strong>
                </div>
            }>
                <p>Hobbies: Swimming gyming</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile

function ProfileCard(props){
    const {name,age,greeting,children}=props
    return(
        <>
        <h2>Name:{name}</h2>
        <p>Age:{age}</p>
        <p>{greeting}</p> 
        <div>{children}</div>
        </>
    )
}