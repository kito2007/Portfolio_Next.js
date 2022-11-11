export default function Projectmodal({setOpenBool, id, title, content, writer}){

    const close = () => {
        setOpenBool(false);
    }

    return (
        <div className="modal-container">
            <button className="modal-close" onClick={close}>
                X
            </button>
            <p>모달 페이지.</p>
        </div>
    );
}