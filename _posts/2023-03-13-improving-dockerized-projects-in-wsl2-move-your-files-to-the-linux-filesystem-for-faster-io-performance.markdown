---
layout: posts
title:  "Improving Dockerized Projects in WSL2: Move Your Files to the Linux Filesystem for Faster I/O Performance"
date:   2024-03-24 00:42:00 -0600
categories: tips
author: Rafal Truszkowski
excerpt: "Do you struggle with slow I/O performance when developing Dockerized projects in Windows Subsystem for Linux 2 (WSL2)? Move your project files to the Linux filesystem and unlock faster I/O performance, better support for Linux tools and workflows, and a more streamlined development workflow."
header:
  overlay_image: /assets/images/bottleneck.jpg
  overlay_filter: 0.85 # same as adding an opacity of 0.5 to a black background
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
classes: wide
redirect_from:
  - /docker
  - /boost-your-wsl2-performance-optimize-your-project-files-for-high-octane-results-on-the-linux-filesystem
---
As a developer working on Dockerized projects in Windows Subsystem for Linux 2 (WSL2), you may have encountered slow I/O performance when accessing files through the shared directory between Windows and WSL2. This can be frustrating, as it can slow down build times and application response times, and make it difficult to iterate quickly in your development workflow.

Fortunately, there is a solution: moving your project files to the WSL2 Linux filesystem. By doing so, you can take advantage of faster I/O performance, better support for Linux tools and workflows, improved file watching capabilities, and a streamlined development workflow. This can help you be more productive and efficient in your work, and avoid frustrating issues that can slow you down.

In this blog post, we'll explore the benefits of moving your project files to the Linux filesystem, and explain how to do it using tools like cp, Git, or rsync. We'll also discuss best practices for organizing your project files in the Linux filesystem, and provide tips for updating your Docker Compose file to work with the Linux filesystem instead of the shared directory. By the end of this post, you'll have the knowledge you need to take advantage of the Linux filesystem and improve your Docker development workflow.

## The Benefits of Moving Project Files to the Linux Filesystem

When accessing files through the shared directory, a translation layer is required to convert Linux file system calls to Windows file system calls. This translation layer can add significant overhead, leading to slower I/O performance, slower build times, and slower application response times. This is especially true when working with large directories, such as the `vendor` directory in PHP or the `node_modules` directory in Node.js.

By moving your project files to the WSL2 Linux filesystem, you can avoid these issues and take advantage of several benefits:

*<u>A. Faster I/O performance</u>*

The Linux filesystem provides faster I/O performance than the shared directory, due to several factors:
- File system overhead: Accessing files through the shared directory in WSL2 can lead to slow I/O performance due to the translation layer that is required to convert Linux file system calls to Windows file system calls. This translation process adds significant overhead to each file system operation, particularly for operations involving many small file reads and writes. By contrast, the Linux file system in WSL2 is optimized for use with Linux tools and workflows, and provides faster I/O performance compared to the Windows file system.
- File system caching: The Linux file system's caching mechanisms, such as the page cache, improve performance by caching data in memory. However, when using mounted volumes in WSL2, data is stored on the external file system rather than the local Linux file system, meaning the caching mechanisms cannot be used to speed up access to the data on the mounted volume.
- File system architecture: The Linux file system in WSL2 is designed for high performance in a multi-tasking, multi-user environment, with features like file system journaling and inode-based file management to improve reliability and speed. However, the use of shared volumes between Windows and Linux in WSL2 introduces significant overhead due to the translation layer that maps Linux file system calls to Windows file system calls. Additionally, the Windows file system lacks some of the performance optimizations and features found in the Linux file system, leading to slower file system operations, especially under heavy load.

*<u>B. Better support for Linux tools and workflows</u>*

The Linux filesystem provides better support for Linux tools and workflows, which are commonly used in Dockerized projects. When using the shared directory, you may encounter issues with Linux-specific file permissions or symbolic links, which can cause problems when building or running Docker containers. By moving your project files to the Linux filesystem, you can avoid these issues and ensure that your development workflow is fully supported. This includes tools like nodemon or webpack-dev-server, which require fast and accurate file watching to detect changes and trigger rebuilds.

*<u>C. Streamlined development workflow</u>*

Moving your project files to the Linux filesystem can help streamline your development workflow by avoiding issues with file permission conflicts or symbolic links. This can help you be more productive and reduce frustration in your work. Additionally, it provides a more seamless development experience when using tools like VSCode's Remote - WSL extension, which allows you to use VSCode on your Windows machine while running your code in WSL2.

To move your project files to the Linux filesystem, you can use tools like cp, Git, or rsync to copy or clone your files to the Linux filesystem. You should also ensure that your Docker Compose file is updated to work with the Linux filesystem instead of the shared directory, by updating the volumes section to point to the Linux filesystem path instead of the Windows path.


## How to Move Project Files to the Linux Filesystem

Now that you understand the benefits of moving your project files to the WSL2 Linux filesystem, let's explore how to do it. There are several tools and methods you can use, depending on your specific needs and preferences.

*<u>A. Using cp</u>*

One simple way to move your project files to the Linux filesystem is to use the `cp` command. This command allows you to copy files and directories from one location to another, preserving their permissions and metadata.

To use `cp` to move your project files to the Linux filesystem, follow these steps:

- Open a terminal window in WSL2.
- Navigate to the directory containing your project files.
- Use the `cp` command to copy your project files to the Linux filesystem. For example, if your project files are located in `/mnt/c/Users/Username/MyProject` on the Windows filesystem, and you want to copy them to `/home/username/MyProject` on the Linux filesystem, you would run the following command:

```
cp -r /mnt/c/Users/Username/MyProject /home/username/MyProject
```

This will copy your project files to the Linux filesystem, preserving their permissions and metadata.

*<u>B. Using Git</u>*

Another way to move your project files to the Linux filesystem is to use Git. This can be especially useful if you are working on a large project with many files and need to ensure that changes are tracked and managed properly.

To use Git to move your project files to the Linux filesystem, follow these steps:

- Open a terminal window in WSL2.
- Clone your repository to the Linux filesystem using the `git clone` command. For example, if your repository is located on GitHub and you want to clone it to `/home/username/MyProject` on the Linux filesystem, you would run the following command:

```
git clone https://github.com/username/myproject.git /home/username/MyProject
```

This will create a new copy of your project files in the Linux filesystem, including all branches and commit history.

*<u>C. Using rsync</u>*

A third way to move your project files to the Linux filesystem is to use `rsync`. This can be especially useful for transferring large files or directories, as it can optimize the transfer to only send the parts of the file that have changed.

To use rsync to move your project files to the Linux filesystem, follow these steps:

- Open a terminal window in WSL2.
- Navigate to the directory containing your project files.
- Use the `rsync` command to copy your project files to the Linux filesystem. For example, if your project files are located in `/mnt/c/Users/Username/MyProject` on the Windows filesystem and you want to copy them to `/home/username/MyProject` on the Linux filesystem, you would run the following command:

```
rsync -a /mnt/c/Users/Username/MyProject/ /home/username/MyProject/
```

This will copy all files and subdirectories from the source directory to the destination directory, preserving file permissions, timestamps, and other metadata.

*<u>D. Updating Your Docker Compose File to Work with the Linux Filesystem</u>*

Once you have moved your project files to the Linux filesystem, you will need to update your Docker Compose file to work with the new file paths. Specifically, you will need to update the volumes section to point to the Linux filesystem path instead of the Windows path.

For example, if your Docker Compose file currently looks like this:

```
volumes:
- /mnt/c/Users/Username/MyProject:/app
```

You would need to update it to look like this:

```
volumes:
- /home/username/MyProject:/app
```

This will ensure that your Docker containers have access to the correct file paths and can function properly.

In conclusion, slow I/O performance can be a significant issue for technical web engineers working on Dockerized projects in Windows Subsystem for Linux 2 (WSL2). However, by moving your project files to the WSL2 Linux filesystem, you can avoid many of the issues associated with the shared directory between Windows and WSL2, and take advantage of several benefits including faster I/O performance, better support for Linux tools and workflows, improved file watching capabilities, and a streamlined development workflow.

There are several tools and methods you can use to move your project files to the Linux filesystem, including cp, Git, and rsync. By following best practices for organizing project files and updating your Docker Compose file to work with the new file paths, you can ensure that your development workflow is fully supported and efficient.

As a technical web engineer, improving your development experience and productivity is critical to delivering high-quality work. By leveraging the benefits of the Linux filesystem in WSL2, you can take a significant step towards that goal.