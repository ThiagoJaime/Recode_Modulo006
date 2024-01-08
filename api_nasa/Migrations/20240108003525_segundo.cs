using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api_nasa.Migrations
{
    public partial class segundo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Clientes_ClienteId",
                table: "Reservas");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Destinos_DestinoId",
                table: "Reservas");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Promocoes_PromocaoId",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_ClienteId",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_DestinoId",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_PromocaoId",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "ClienteId",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "DestinoId",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "PromocaoId",
                table: "Reservas");

            migrationBuilder.AddColumn<int>(
                name: "ClientesId",
                table: "Reservas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DestinosId",
                table: "Reservas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PromocoesId",
                table: "Reservas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_ClientesId",
                table: "Reservas",
                column: "ClientesId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_DestinosId",
                table: "Reservas",
                column: "DestinosId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_PromocoesId",
                table: "Reservas",
                column: "PromocoesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Clientes_ClientesId",
                table: "Reservas",
                column: "ClientesId",
                principalTable: "Clientes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Destinos_DestinosId",
                table: "Reservas",
                column: "DestinosId",
                principalTable: "Destinos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Promocoes_PromocoesId",
                table: "Reservas",
                column: "PromocoesId",
                principalTable: "Promocoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Clientes_ClientesId",
                table: "Reservas");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Destinos_DestinosId",
                table: "Reservas");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservas_Promocoes_PromocoesId",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_ClientesId",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_DestinosId",
                table: "Reservas");

            migrationBuilder.DropIndex(
                name: "IX_Reservas_PromocoesId",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "ClientesId",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "DestinosId",
                table: "Reservas");

            migrationBuilder.DropColumn(
                name: "PromocoesId",
                table: "Reservas");

            migrationBuilder.AddColumn<int>(
                name: "ClienteId",
                table: "Reservas",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DestinoId",
                table: "Reservas",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PromocaoId",
                table: "Reservas",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_ClienteId",
                table: "Reservas",
                column: "ClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_DestinoId",
                table: "Reservas",
                column: "DestinoId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_PromocaoId",
                table: "Reservas",
                column: "PromocaoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Clientes_ClienteId",
                table: "Reservas",
                column: "ClienteId",
                principalTable: "Clientes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Destinos_DestinoId",
                table: "Reservas",
                column: "DestinoId",
                principalTable: "Destinos",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservas_Promocoes_PromocaoId",
                table: "Reservas",
                column: "PromocaoId",
                principalTable: "Promocoes",
                principalColumn: "Id");
        }
    }
}
