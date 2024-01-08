using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace api_nasa.Models
{
    [Table("Clientes")]
    public class Clientes
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Senha { get; set;}
        [Required]
        public string Telefone { get; set; }

        [JsonIgnore]
        public List<Reservas>? Reserva { get; set; }
    }
}
