import { Section, Title, List, ListItem, Data } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
	return (
		<Section>
			<Title>{title}</Title>
			<List>
				{stats.map(({ id, label, percentage }) => (
					<ListItem key={id}>
						<Data>{label}</Data>
						<Data type="number">{percentage}</Data>
					</ListItem>
				))}
			</List>
		</Section>
	);
};