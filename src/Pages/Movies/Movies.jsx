export const Movies = () => {
	const formDataSets = event => {
		event.preventDefault();
	};
	return (
		<form onSubmit={formDataSets}>
			<input type="text" />
			<button type="button"></button>
		</form>
	);
};
