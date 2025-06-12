package com.perpustakaan;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class BukuServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String judul = request.getParameter("judul");
        String penulis = request.getParameter("penulis");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html><body>");
        out.println("<h2>Buku berhasil ditambahkan!</h2>");
        out.println("<p>Judul: " + judul + "</p>");
        out.println("<p>Penulis: " + penulis + "</p>");
        out.println("<a href='index.html'>Kembali</a>");
        out.println("</body></html>");
    }
}

