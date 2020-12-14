export default function Footer() {
  return (
    <footer style={{backgroundColor: "#484848",
      minHeight: "30%", color: "white", display: "flex",
      alignItems: "flex-end", flexDirection: "row-reverse"}}>
      <div style={{textAlign: "right", padding: "0.5rem"}}>
        Background image is provided by: &nbsp;
        <a style={{color: "#ccc", textDecoration: "none"}}
           href="https://www.vecteezy.com/free-vector/mesh">Mesh Vectors by Vecteezy</a>
      </div>
    </footer>
  );
}
