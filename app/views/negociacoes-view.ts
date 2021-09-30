export class NegociacoesView {

  private elemeto: HTMLElement;

  constructor(seletor: string) {
    this.elemeto = document.querySelector(seletor);
  }

  template(): string {
    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
            </table>
        `;
  }

  update(): void {
      this.elemeto.innerHTML = this.template();
  }

}
