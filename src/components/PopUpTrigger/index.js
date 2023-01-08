import React from "react";
import Popup from "reactjs-popup";
import Upload from "components/Content/Upload";

export default function PopUpTrigger({ children, firebaseStorage, firebaseFolder }) {
	return (
		<div>
			<Popup modal trigger={children} lockScroll>
				{(close) => (
					<React.Fragment>
						<Upload close={close} firebaseStorage={firebaseStorage} firebaseFolder={firebaseFolder}/>
					</React.Fragment>
				)}
			</Popup>
		</div>
	);
}
