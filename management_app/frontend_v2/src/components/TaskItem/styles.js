const styles = theme => ({
    card: {
        textColor: theme.typography.color,
    },
    cardname: {
        fontSize: 20,
        fontWeight: "bold"
    },
    cardAction: {
        display: "flex",
        justifyContent: "flex-end"
    },
    carddescription: {
        fontSize: 16
    }
});
export default styles;