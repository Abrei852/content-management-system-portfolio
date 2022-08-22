import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import PopupOption from "components/Popup/Option";
import { Button } from "react-bootstrap";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ref } from "firebase/storage";
import { toast } from "react-toastify";
import { uploadString } from "firebase/storage";
import { useFilePicker } from "use-file-picker";

export default function Upload({ close, firebaseStorage }) {
	const [openFileSelector, { filesContent }] = useFilePicker({
		accept: ".pdf",
		readAs: "DataURL",
		maxFileSize: 5,
	});

	function uploadFile() {
		const fileData = filesContent[0];
		const fileDbRef = ref(firebaseStorage, `cv/${fileData.name}`);
		const upload = uploadString(fileDbRef, fileData.content, "data_url");
		toast.promise(upload, {
			pending: {
				position: "top-left",
				autoClose: 1500,
				render() {
					return "Uploading CV";
				},
			},
			success: "CV uploaded successfully!",
			error: "Something went wrong, try again",
		});
		close();
	}

	return (
		<React.Fragment>
			<div className="d-flex justify-content-between align-items-center padding-20 background-light-grey border-radius-5">
				<div>
					<p className="font-14">Select file (PDF)</p>
					{filesContent.map((file, id) => (
						<p key={id} className="font-12">
							{file.name}
						</p>
					))}
				</div>
				<Button
					className="expand-sm"
					variant="secondary"
                    title="Pick a file"
					onClick={() => openFileSelector()}
				>
					<FontAwesomeIcon
						icon={faCloudUploadAlt}
						className="font-14"
					/>
				</Button>
			</div>
			<PopupOption
				btnTitle1="Upload"
				btnClick={uploadFile}
				btnTitle2="Cancel"
				btnType1="submit"
				close={close}
			/>
		</React.Fragment>
	);
}
