using System;
using Woopsa;

namespace server
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting server");

            var server = new Server();

            var woopsaServer = new WoopsaServer(server);
        }
    }
}
