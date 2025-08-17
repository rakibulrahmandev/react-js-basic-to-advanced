export default function MainLayout(props) {
    return (
        <>
            <div className="w-full min-h-screen flex flex-row gap-5 items-center justify-evenly p-5">
                {props.children}
            </div>
        </>
    )    
}