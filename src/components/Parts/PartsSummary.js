import classes from "./PartsSummary.module.css";

export default function PartsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Great parts sent to you.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere
        id erat nec volutpat. Donec nec sollicitudin sapien, vitae sagittis
        ligula. Pellentesque quis lacinia tellus. Vivamus risus mauris, semper
        vel interdum nec, faucibus id nisi.
      </p>
      <p>
        Pellentesque venenatis rhoncus orci in venenatis. Integer ornare nulla
        vulputate est auctor consequat. Morbi vel sapien nec urna convallis
        lobortis. Nunc vitae accumsan est. Maecenas velit diam, scelerisque
        semper ornare sed, iaculis sed leo. Sed varius volutpat nunc a
        ullamcorper.
      </p>
    </section>
  );
}
