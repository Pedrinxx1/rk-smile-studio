const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Sobre a Clínica
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
            Cuidado que transforma sorrisos
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <strong className="text-card-foreground">RK Odontologia e Estética</strong> é um consultório localizado 
            no Gama – DF, focado em odontologia e estética facial. Nosso compromisso é oferecer um atendimento 
            profissional e acolhedor, com foco na saúde, bem-estar e autoestima dos nossos pacientes. 
            Utilizamos tecnologia moderna e técnicas atualizadas para entregar os melhores resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
