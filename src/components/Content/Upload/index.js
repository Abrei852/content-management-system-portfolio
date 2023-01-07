import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import PopupOption from "components/Popup/Option";
import { faCloudUploadAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { ref, listAll, getMetadata } from "firebase/storage";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import { uploadString } from "firebase/storage";
import { useFilePicker } from "use-file-picker";

export default function Upload({ close, firebaseStorage, firebaseFolder }) {
	const [openFileSelector, { filesContent }] = useFilePicker({
		accept: ".pdf",
		readAs: "DataURL",
		maxFileSize: 5,
	});

	const [files, setFiles] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const listRef = ref(firebaseStorage, firebaseFolder);
		listAll(listRef).then((res) => {
			res.items.forEach((itemRef) => {
				const CVref = ref(
					firebaseStorage,
					`${firebaseFolder}/${itemRef.name}`
				);
				getMetadata(CVref).then((metaData) => {
					const date = format(
						new Date(metaData.timeCreated),
						"yyyy-mm-dd"
					);
					setFiles((prevState) => [
						...prevState,
						{
							fileName: metaData.name,
							dateCreated: date,
						},
					]);
				});
			});
		});
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearInterval(timer);
	}, []);

	function uploadFile() {
		const fileData = filesContent[0];
		const fileDbRef = ref(
			firebaseStorage,
			`${firebaseFolder}/${fileData.name}`
		);
		const upload = uploadString(fileDbRef, fileData.content, "data_url");
		toast.promise(upload, {
			pending: {
				position: "top-left",
				autoClose: 1000,
				render() {
					return "Uploading File";
				},
			},
			success: "File uploaded successfully!",
			error: "Something went wrong, try again",
		});
		close();
	}

	return (
		<React.Fragment>
			<div className="background-light-grey border-radius-5 padding-20 mb-3">
				<p className="font-12 mb-2">Uploaded files</p>
				{loading ? (
					<TailSpin height={20} width={20} color="#000000" />
				) : (
					files.map((file, index) => (
						<div
							key={index}
							className="d-flex justify-content-between font-12"
						>
							<p
								className="width-100 hide-text-elipsis"
								title={file.fileName}
							>
								{file.fileName}
							</p>
							<p className="width-100 hide-text-elipsis">
								{file.dateCreated}
							</p>
						</div>
					))
				)}
			</div>
			<div className="padding-20 background-light-grey border-radius-5 mb-3">
				<div className="d-flex justify-content-between align-items-center ">
					<p className="font-14">Select file (PDF)</p>

					<FontAwesomeIcon
						icon={faCloudUploadAlt}
						title="Select a file"
						onClick={() => openFileSelector()}
						className="pointer expand-sm"
					/>
				</div>
				{filesContent.map((file, id) => (
					<div
						key={id}
						className="d-flex justify-content-between align-items-center"
					>
						<p className="font-12">{file.name}</p>
					</div>
				))}
			</div>
			<PopupOption
				btnTitle1="Upload"
				btnType1="submit"
				btnClick={uploadFile}
				btnDisabled1={filesContent[0] ? false : true}
				btnTitle2="Cancel"
				close={close}
			/>
		</React.Fragment>
	);
}
