import Project from '../models/Project.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Private
export const getProjects = async (req, res) => {
  try {
    let query = {};
    
    // Members see projects they're part of, admins see all
    if (req.user.role !== 'admin') {
      query = {
        $or: [
          { managerId: req.user._id },
          { teamMembers: req.user._id }
        ]
      };
    }

    const projects = await Project.find(query)
      .populate('managerId', 'name email')
      .populate('teamMembers', 'name email')
      .sort({ createdAt: -1 });

    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Private
export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('managerId', 'name email')
      .populate('teamMembers', 'name email');

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create project
// @route   POST /api/projects
// @access  Private (Admin only)
export const createProject = async (req, res) => {
  try {
    const { title, description, status, teamMembers, startDate, endDate } = req.body;

    const project = await Project.create({
      title,
      description,
      status: status || 'planning',
      managerId: req.user._id,
      teamMembers: teamMembers || [],
      startDate,
      endDate
    });

    const populatedProject = await Project.findById(project._id)
      .populate('managerId', 'name email')
      .populate('teamMembers', 'name email');

    res.status(201).json({ success: true, data: populatedProject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private (Admin only)
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
      .populate('managerId', 'name email')
      .populate('teamMembers', 'name email');

    res.json({ success: true, data: updatedProject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private (Admin only)
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    await project.deleteOne();

    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
